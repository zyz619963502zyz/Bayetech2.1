using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.Core.Entity;
using Bayetech.Core;
using Newtonsoft.Json;
using System.Linq.Expressions;
using Bayetech.Service.Model;
using Bayetech.DAL;

namespace Bayetech.Service
{
    /// <summary>
    /// 
    /// </summary>
    public class AdminManageService : BaseService<T_Pub_User>, IAdminManageService
    {
        public JObject AddRoles(JObject json)
        {
            Admin_Sys_UserRoles _admin_Sys_UserRoles = json["RoleUser"].ToString() == "" ? new Admin_Sys_UserRoles() : JsonConvert.DeserializeObject<Admin_Sys_UserRoles>(json["RoleUser"].ToString());
            Admin_Sys_UserRoles roles = repository.FindEntity<Admin_Sys_UserRoles>(a => a.UserID == _admin_Sys_UserRoles.UserID);
            JObject result = new JObject();
            if(roles==null)
            {
                using (var db = new RepositoryBase().BeginTrans())
                {
                    db.Insert(_admin_Sys_UserRoles);
                    if (db.Commit() == 1)
                    {
                        result.Add(ResultInfo.Result, true);
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, false);
                    }
                }
            }
            else
            {
                using (var db = new RepositoryBase().BeginTrans())
                {
                    _admin_Sys_UserRoles.Keyid = roles.Keyid;
                    db.Update(_admin_Sys_UserRoles);
                    if (db.Commit() == 1)
                    {
                        result.Add(ResultInfo.Result, true);
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, false);
                    }
                }
            }
            return result;
        }

        /// <summary>
        /// 添加一个新的用户
        /// </summary>
        /// <param name="json"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        public JObject AddUser(JObject json, int UserId)
        {
            Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("User_ID") : JsonConvert.DeserializeObject<Pagination>(json["ListObj"].ToString());
            T_Pub_User _admin_Sys_User = json["ListObj"].ToString() == "" ? new T_Pub_User() : JsonConvert.DeserializeObject<T_Pub_User>(json["ListObj"].ToString());
            
            JObject result = new JObject();
            if (string.IsNullOrEmpty(_admin_Sys_User.User_Name))
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("用户名或真实姓名不能为空"));
            }
            using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
            {
                T_Pub_User user = db.FindEntity<T_Pub_User>(a => a.User_ID == _admin_Sys_User.User_ID);
                var getCode= db.IQueryable<T_Pub_User>().Select(a=>a.User_Code).Max();
                
                //if (user!=null)
                //{
                //    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                //    result.Add(ResultInfo.Content, JProperty.FromObject("用户已存在"));
                //}
                try
                {
                    if (user == null)
                    {
                        user = new T_Pub_User();
                        user.User_Guid = Guid.NewGuid().ToString();
                        user.User_SEX = 1;
                        user.User_ID = _admin_Sys_User.User_ID;
                        user.User_Name = _admin_Sys_User.User_Name;
                        user.Remark = _admin_Sys_User.Remark;
                        user.IsAvailab = _admin_Sys_User.IsAvailab;
                        user.User_Code = CommonHelper.ConvertToLength((Convert.ToInt32(getCode) + 1).ToString(),7,'0');
                        user.User_PWD= Md5.EncryptString("111111");
                        db.Insert(user);

                    }
                    else
                    {
                        user.Remark= _admin_Sys_User.Remark; 
                        user.User_Name= _admin_Sys_User.User_Name;
                        user.IsAvailab = _admin_Sys_User.IsAvailab;
                        db.Update(user);
                    }
                    db.Commit();
                    result.Add(ResultInfo.Result, true);

                }
                catch (Exception ex)
                {
                    result.Add(ResultInfo.Result, false);
                }
            }
            return result;
        }

        public JObject DeleteUser(JObject json)
        {
            JObject result = new JObject();
            T_Pub_User admin_Sys_Users = json["ListObj"].ToString() == "" ? new T_Pub_User() : JsonConvert.DeserializeObject<T_Pub_User>(json["ListObj"].ToString());
            using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
            {
                db.Delete(admin_Sys_Users);
                if (db.Commit() == 1)
                {
                    result.Add(ResultInfo.Result, true);
                }
                else
                {
                    result.Add(ResultInfo.Result, false);
                }
            }
            return result;
        }

        public JObject GetNavgationList(JObject json, DateTime? StartTime, DateTime? EndTime)
        {
            repository = new RepositoryBase(DBFactory.oas);
            var list = repository.IQueryable<T_Pro_Menu>(a => a.isdelete==0).ToList();
            if (!string.IsNullOrEmpty(json["Param"]["MenuName"].ToString()))
            {
                var title = json["Param"]["MenuName"].ToString();
                list = list.FindAll(a => a.MenuName.Contains(title));
            }
            var menuList = new List<NavigationModel>();
            JObject result = new JObject();
            foreach (var item in list.Where(it => it.ParentID == 0))
            {
                var menuModel = new NavigationModel();
                menuModel.MenuID = item.MenuID;
                menuModel.MenuName = item.MenuName;
                menuModel.url = item.url;
                menuModel.sortid = (int)item.sortid;
                menuModel.ParentID = (int)item.ParentID;

                menuModel.ChildNodes =
                    list.Where(c => c.ParentID == item.MenuID)
                        .Select(
                            c =>
                                new ChilNavdNodes
                                {
                                    MenuID = c.MenuID,
                                    MenuName = c.MenuName,
                                    url = c.url,
                                    sortid = (int)c.sortid,
                                    ParentID = (int)c.ParentID
                                })
                        .OrderBy(c => c.sortid).ToList();
                menuList.Add(menuModel);
            }
            menuList = menuList.OrderBy(c => c.sortid).ToList();
            if (menuList.Count > 0)
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(true));
                result.Add(ResultInfo.Content, JProperty.FromObject(menuList));
            }
            else
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("没有数据"));
            }
            //var list = repository.IQueryable<Admin_Sys_Navigations>(a => (bool)a.IsVisible).ToList();
            //if (!string.IsNullOrEmpty(json["Param"]["NavTitle"].ToString()))
            //{
            //    var title = json["Param"]["NavTitle"].ToString();
            //    list = list.FindAll(a => a.NavTitle == title);
            //} 
            //var menuList = new List<NavigationModel>();
            //JObject result = new JObject();
            //foreach (var item in list.Where(it => it.ParentID == 0))
            //{
            //    var menuModel = new NavigationModel();
            //    menuModel.KeyId = item.KeyId;
            //    menuModel.NavTitle = item.NavTitle;
            //    menuModel.Linkurl = item.Linkurl;
            //    menuModel.Sortnum = (int)item.Sortnum;
            //    menuModel.ParentID = (int)item.ParentID;

            //    menuModel.ChildNodes =
            //        list.Where(c => c.ParentID == item.KeyId)
            //            .Select(
            //                c =>
            //                    new ChilNavdNodes
            //                    {
            //                        KeyId = c.KeyId,
            //                        NavTitle = c.NavTitle,
            //                        Linkurl = c.Linkurl,
            //                        Sortnum = (int)c.Sortnum,
            //                        ParentID= (int)c.ParentID
            //})
            //            .OrderBy(c => c.Sortnum).ToList();
            //    menuList.Add(menuModel);
            //}
            //menuList = menuList.OrderBy(c => c.Sortnum).ToList();
            //if(menuList.Count>0)
            //{
            //    result.Add(ResultInfo.Result, JProperty.FromObject(true));
            //    result.Add(ResultInfo.Content, JProperty.FromObject(menuList));
            //}
            //else
            //{
            //    result.Add(ResultInfo.Result, JProperty.FromObject(true));
            //    result.Add(ResultInfo.Content, JProperty.FromObject("没有数据"));
            //}
            return result;
        }

        /// <summary>
        /// 获取用户信息
        /// </summary>
        /// <returns></returns>
        public JObject GetUserList(JObject json, DateTime? StartTime, DateTime? EndTime)
        {
            using (var db = new RepositoryBase(DBFactory.oas))
            {
                json = json ?? new JObject();
                Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("USER_ID") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
                Expression<Func<v_pub_UserRoleJiHeCanel, bool>> expression = PredicateExtensions.True<v_pub_UserRoleJiHeCanel>();
                PaginationResult<List<v_pub_UserRoleJiHeCanel>> ResultPage = new PaginationResult<List<v_pub_UserRoleJiHeCanel>>();
                var userList = db.FindList(page ?? Pagination.GetDefaultPagination("User_ID"), out page, expression);
                //var id = json["ListObj"]["USER_ID"].ToString() == "" ? 0 : (int)json["ListObj"]["USER_ID"];
                //var roles = repository.IQueryable<T_Pub_User>(a=>a.User_ID==id);//角色列表

                JObject result = new JObject();
                if (!string.IsNullOrEmpty(json["Param"]["Type"].ToString()))
                {
                    userList = userList.FindAll(a => a.User_ID.Contains(json["Param"]["Type"].ToString()) || a.User_Name.Contains(json["Param"]["Type"].ToString()));
                }        
                ResultPage.datas = userList.ToList();
                if (page != null)
                {
                    ResultPage.pagination = page;
                }
                if (ResultPage.datas.Count > 0)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                    //result.Add("RolesList", JProperty.FromObject(roles));
                    result.Add(ResultInfo.Content, JProperty.FromObject(ResultPage));
                }
                else
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("无数据"));
                }
                return result;
            }
        }
        #region 分配角色
        public JObject RolesGetTree()
        {
            using (var db = new RepositoryBase(DBFactory.oas))
            {
                JObject result = new JObject();
                var list = db.IQueryable<T_Pub_Role>().ToList();
                var nav = GetChildMenu(list, 0);
                if (nav.Count > 0)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                    result.Add(ResultInfo.Content, JProperty.FromObject(nav));
                }
                else
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("无数据"));
                }
                return result;
            }

        }

        private static IList<NavTreeModelPub> GetChildMenu(IList<T_Pub_Role> list, int id)
        {
            using (var db = new RepositoryBase(DBFactory.oas))
            {
                IList<NavTreeModelPub> entitys = new List<NavTreeModelPub>();
                foreach (var item in list)
                {
                    var entity = new NavTreeModelPub();
                    entity.Role_id = item.Role_id;
                    entity.Role_Value = item.Role_Value;
                    entity.Module_ID = item.Module_ID;

                    entity.Role_Name = item.Role_Name;
                    entity.CreateTime = item.CreateTime;
                    entity.Role_Display = item.Role_Display;
                    entity.RoleSerial = item.RoleSerial;
                    //entity.nodes = GetChildMenu(list, item.Role_id);
                    entity.id = (int)entity.Role_id;
                    entity.text = entity.Role_Name;
                    entitys.Add(entity);
                }
                entitys = entitys.OrderByDescending(c => c.Role_id).ToList();
                return entitys;
            }
        }

        public JObject RolesGetTrees(string id)
        {
            using (oasEntities bay = new oasEntities())
            {
                JObject result = new JObject();
                var list = bay.UP_GetUserAllRole(id).ToList();
                var ret = list.Select(c => new { Role_Value = c.ROLE_VALUE, state = true });
                if (list == null)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("没有数据"));
                }
                else
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                    result.Add(ResultInfo.Content, JProperty.FromObject(ret));
                }
                return result;
            }
        }

        public JObject PutRoles(JObject json)
        {
            JObject result = new JObject();
            try
            {
                List<CheckedListModel> checkList = json["json"].ToString() == "" ? new List<CheckedListModel>() : JsonConvert.DeserializeObject<List<CheckedListModel>>(json["json"].ToString());
                string id = json["id"].ToString() == "" ? "" : JsonConvert.DeserializeObject<string>(json["id"].ToString());
                //int RoleId = Convert.ToInt32(id);
                var modes = checkList.Where(a => a.status == true).Select(s => new T_Pub_Role { Role_Value = s.id }).ToList();
                long sum = modes.Sum(a => a.Role_Value);
                using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
                {
                    var menuRole = db.IQueryable<T_Pub_UserRole>(a => a.User_id == id).FirstOrDefault();
                    
                    
                    if (menuRole == null)
                    {
                        T_Pub_UserRole userRole = new T_Pub_UserRole();
                        userRole.Role_value = sum;
                        userRole.User_id = id;
                        userRole.Module_ID = "0001";
                        userRole.CreateTime = DateTime.Now;
                        userRole.RoleColumn1 = 0;
                        userRole.RoleColumn2 = 0;
                        userRole.RoleColumn3 = 0;
                        userRole.msrepl_tran_version = Guid.NewGuid();
                        db.Insert<T_Pub_UserRole>(userRole);
                    }
                    else
                    {
                        menuRole.Role_value = sum;
                        db.Update<T_Pub_UserRole>(menuRole);
                    }
                    db.Commit();
                }
            }
            catch(Exception ex)
            {
                result.Add(ResultInfo.Result, true);
                result.Add(ResultInfo.Content, JProperty.FromObject(ex.ToString()));
                return result;
            }

            result.Add(ResultInfo.Result, true);
            return result;
        }
        #endregion
    }
    public class CommonHelper
    {
        public static string ConvertToLength(string oldID, int length, char replaceStr)
        {

            if (string.IsNullOrEmpty(oldID))
            {
                return GetReplaceStr(length, replaceStr);
            }

            return GetReplaceStr((length - oldID.Length), replaceStr) + oldID;
        }

        protected static string GetReplaceStr(int length, char replaceStr)
        {
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < length; i++)
            {
                sb.Append(replaceStr);
            }

            return sb.ToString();
        }
    }



}
