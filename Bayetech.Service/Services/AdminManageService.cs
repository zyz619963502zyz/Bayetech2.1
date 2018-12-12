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
            Admin_Sys_Users _admin_Sys_User = json["ListObj"].ToString() == "" ? new Admin_Sys_Users() : JsonConvert.DeserializeObject<Admin_Sys_Users>(json["ListObj"].ToString());
            _admin_Sys_User.Password = "111111";
            _admin_Sys_User.Password = Md5.EncryptString(_admin_Sys_User.Password);
            JObject result = new JObject();
            if (string.IsNullOrEmpty(_admin_Sys_User.UserName))
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("用户名或真实姓名不能为空"));
            }
            //=0 添加
            if (_admin_Sys_User.KeyId <= 0)
            {
                Admin_Sys_Users user = repository.FindEntity<Admin_Sys_Users>(a => a.UserName == _admin_Sys_User.UserName);
                if (user != null)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("用户名已存在，请更换用户名！"));
                }
                else
                {
                    using (var db = new RepositoryBase().BeginTrans())
                    {
                        db.Insert(_admin_Sys_User);
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
            }
            else
            {
                //修改
                using (var db = new RepositoryBase().BeginTrans())
                {
                    db.Update(_admin_Sys_User);
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

        public JObject DeleteUser(JObject json)
        {
            JObject result = new JObject();
            Admin_Sys_Users admin_Sys_Users = json["ListObj"].ToString() == "" ? new Admin_Sys_Users() : JsonConvert.DeserializeObject<Admin_Sys_Users>(json["ListObj"].ToString());
            using (var db = new RepositoryBase().BeginTrans())
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
                Expression<Func<T_Pub_User, bool>> expression = PredicateExtensions.True<T_Pub_User>();
                PaginationResult<List<T_Pub_User>> ResultPage = new PaginationResult<List<T_Pub_User>>();
                var userList = db.FindList(page ?? Pagination.GetDefaultPagination("USER_ID"), out page, expression);
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
            using (var db = new RepositoryBase(DBFactory.oas))
            {
                JObject result = new JObject();
                var list = db.IQueryable<T_Pub_UserRole>(a => a.User_id == id).ToList();
                var ret = list.Select(c => new { Userrole_id = c.Userrole_id, state = true });
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
            List<CheckedListModel> checkList = json["json"].ToString() == "" ? new List<CheckedListModel>() : JsonConvert.DeserializeObject<List<CheckedListModel>>(json["json"].ToString());
            string id = json["id"].ToString() == "" ? "" : JsonConvert.DeserializeObject<string>(json["id"].ToString());
            int RoleId = Convert.ToInt32(id);
            var modes = checkList.Where(a => a.status == true).Select(s => new Admin_Sys_RoleNavBtns { RoleId = RoleId, NavId = s.id }).ToList();
            using (var db = new RepositoryBase().BeginTrans())
            {
                db.Delete<Admin_Sys_RoleNavBtns>(c => c.RoleId == RoleId);
                db.Commit();
            }
            using (var db = new RepositoryBase().BeginTrans())
            {
                foreach (var item in modes)
                {
                    db.Insert<Admin_Sys_RoleNavBtns>(item);

                }
                db.Commit();
            }
            result.Add(ResultInfo.Result, true);
            return result;
        }
        #endregion
    }



}
