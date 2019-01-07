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
using Bayetech.DAL;
using Bayetech.Service.Model;
using Bayetech.Core.Security.Json;

namespace Bayetech.Service
{
    public class RolesService :BaseService<T_Pub_Role>, IRolesService 
    {
        public JObject AddRoles(JObject json)
        {

            T_Pub_Role tRole = json["ListObj"].ToString() == "" ? new T_Pub_Role() : JsonConvert.DeserializeObject<T_Pub_Role>(json["ListObj"].ToString());
            JObject result = new JObject();
            if (string.IsNullOrEmpty(tRole.Role_Name) || string.IsNullOrEmpty(tRole.Module_ID) || string.IsNullOrEmpty(tRole.RoleSerial))
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("必填项不能为空"));
                return result;
            }
            using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
            {
                var role = db.FindEntity<T_Pub_Role>(a => a.Role_Name == tRole.Role_Name);
                var getMax = db.IQueryable<T_Pub_Role>().Select(a => a.Role_Value).Max();
                var getMax1 = db.IQueryable<T_Pub_Role>().Select(a => a.Role_id).Max();
                if (role != null)
                {
                    result.Add(ResultInfo.Result, JToken.FromObject(false));
                    result.Add(ResultInfo.Content, JToken.FromObject("菜单名称不能重复"));
                }
                else
                {
                    try
                    {
                        if (tRole.Role_id == 0)
                        {
                            tRole.Role_Remark = tRole.Role_Name;
                            tRole.Role_Display = tRole.Role_Name;
                            tRole.Role_Column = "0";
                            tRole.CreateTime = DateTime.Now;
                            tRole.Company_ID = 1;
                            tRole.Role_Value = getMax * 2;
                            tRole.Role_id = getMax1 + 1;
                            db.Insert(tRole);

                        }
                        else
                        {
                            db.Update(tRole);
                        }
                        db.Commit();
                        result.Add(ResultInfo.Result, true);
                       
                    }
                    catch(Exception ex)
                    {
                        result.Add(ResultInfo.Result, false);
                    }
                }
                return result;
            }
        }

        public JObject DeleteRoles(JObject json)
        {
            JObject result = new JObject();
            T_Pub_Role _admin_Sys_Roles = json["ListObj"].ToString() == "" ? new T_Pub_Role() : JsonConvert.DeserializeObject<T_Pub_Role>(json["ListObj"].ToString());
            using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
            {
                db.Delete(_admin_Sys_Roles);
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

        public JObject GetListRoles(JObject json, DateTime? StartTime, DateTime? EndTime)
        {
            using (var db = new RepositoryBase(DBFactory.oas))
            {
                #region  Old
                //json = json ?? new JObject();
                //Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("KeyId") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
                //Expression<Func<Admin_Sys_Roles, bool>> expression = PredicateExtensions.True<Admin_Sys_Roles>();
                //PaginationResult<List<Admin_Sys_Roles>> ResultPage = new PaginationResult<List<Admin_Sys_Roles>>();
                //var userList = db.FindList(page ?? Pagination.GetDefaultPagination("KeyId"), out page, expression);
                //JObject result = new JObject();
                //if (!string.IsNullOrEmpty(json["Param"]["Type"].ToString()))
                //{
                //    userList = userList.FindAll(a => a.RoleName.Contains(json["Param"]["Type"].ToString()));
                //}
                //ResultPage.datas = userList.ToList();

                ////权限分配菜单
                //var list = db.IQueryable<Admin_Sys_Navigations>(a => (bool)a.IsVisible).ToList();
                //var menuList = new List<NavigationModel>();
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
                //                        ParentID = (int)c.ParentID
                //                    })
                //            .OrderBy(c => c.Sortnum).ToList();
                //    menuList.Add(menuModel);
                //}
                //menuList = menuList.OrderBy(c => c.Sortnum).ToList();
                //if (page != null)
                //{
                //    ResultPage.pagination = page;
                //}
                //if (ResultPage.datas.Count > 0)
                //{
                //    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                //    result.Add(ResultInfo.Content, JProperty.FromObject(ResultPage));
                //    result.Add("RolesMenu", JProperty.FromObject(menuList));
                //}
                //else
                //{
                //    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                //    result.Add(ResultInfo.Content, JProperty.FromObject("无数据"));
                //}
                #endregion
                #region
                json = json ?? new JObject();
                Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("Role_id") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
                Expression<Func<T_Pub_Role, bool>> expression = PredicateExtensions.True<T_Pub_Role>();
                PaginationResult<List<T_Pub_Role>> ResultPage = new PaginationResult<List<T_Pub_Role>>();
                var userList = db.FindList(page ?? Pagination.GetDefaultPagination("Role_id"), out page, expression);
                JObject result = new JObject();
                if (!string.IsNullOrEmpty(json["Param"]["Type"].ToString()))
                {
                    userList = userList.FindAll(a => a.Role_Name.Contains(json["Param"]["Type"].ToString()));
                }
                ResultPage.datas = userList.ToList();
                if (page != null)
                {
                    ResultPage.pagination = page;
                }
                if (ResultPage.datas.Count > 0)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                    result.Add(ResultInfo.Content, JProperty.FromObject(ResultPage));
                    //result.Add("RolesMenu", JProperty.FromObject(menuList));
                }
                else
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("无数据"));
                }
                #endregion
                return result;
            }
            
        }

        public JObject RolesGetTree()
        {
            using (var db = new RepositoryBase(DBFactory.oas))
            {
                JObject result = new JObject();
                var list = db.IQueryable<T_Pro_Menu>(a => a.isdelete==0).ToList();
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

        private static IList<NavTreeModel> GetChildMenu(IList<T_Pro_Menu> list, int id)
        {
            using (var db = new RepositoryBase())
            {
                IList<NavTreeModel> entitys = new List<NavTreeModel>();
                foreach (var item in list.Where(it => it.ParentID == id))
                {
                    var entity = new NavTreeModel();
                    entity.MenuID = item.MenuID;
                    entity.sortid = item.sortid;
                    entity.MenuName = item.MenuName;
                    entity.SysFlag = item.SysFlag;

                    entity.url = item.url;
                    entity.isdelete = item.isdelete;
                    entity.ParentID = item.ParentID;

                    entity.id = entity.MenuID;
                    entity.text = entity.MenuName;

                    entity.nodes = GetChildMenu(list, item.MenuID);
                    entitys.Add(entity);
                }
                entitys = entitys.OrderByDescending(c => c.MenuID).ToList();
                return entitys;
            }
        }

        public JObject RolesGetTrees(int id)
        {
            using (var db = new RepositoryBase(DBFactory.oas))
            {
                JObject result = new JObject();
                var list = db.IQueryable<T_Pro_MenuRole>(a => a.RoleValue == id).ToList();
                var ret = list.Select(c => new { MenuID = c.MenuID, state = true });
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
                var modes = checkList.Where(a => a.status == true).Select(s => new T_Pro_MenuRole { RoleValue = RoleId, MenuID = s.id }).ToList();
            using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
            {
                var menuRole = db.IQueryable<T_Pro_MenuRole>(a => a.RoleValue == RoleId).ToList();
                var skus1 = menuRole.Select(a => a.MenuID).ToArray();
                var skus2 = modes.Select(a => a.MenuID).ToArray();
                long[] arrdel = skus1.Except(skus2).ToArray();//减少的
                long[] arrdel2 =skus2.Except(skus1).ToArray();
                var menuRoles = menuRole.Where(a => arrdel.Contains(a.MenuID)).ToList();
                if (arrdel.Length > 0)
                {
                    //删除以去掉的权限数据
                    foreach (var item in menuRoles)
                    {
                        db.Delete<T_Pro_MenuRole>(c => c.ID == item.ID);
                    }
                }
                if(arrdel2.Length> 0)
                {
                    for (int i = 0; i < arrdel2.Length; i++)
                    {
                        T_Pro_MenuRole meun = new T_Pro_MenuRole();
                        meun.RoleValue = RoleId;
                        meun.MenuID = arrdel2[i];
                        meun.RoleColumn1 = 0;
                        meun.moduleID = "0001";
                        meun.createtime = DateTime.Now;
                        meun.msrepl_tran_version = Guid.NewGuid();
                        db.Insert<T_Pro_MenuRole>(meun);
                    }
                }
                db.Commit();
                result.Add(ResultInfo.Result, true);
                return result;
            }
            
        }
    }
}
