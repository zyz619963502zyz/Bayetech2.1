using Bayetech.Service.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bayetech.Core.Entity;
using System.Collections.Concurrent;
using Bayetech.Service.Model;
using Bayetech.Core.Security.Json;
using Newtonsoft.Json.Linq;
using Bayetech.Core;
using Newtonsoft.Json;
using Bayetech.DAL;
using System.Data.SqlClient;

namespace Bayetech.Service
{
    public class NavigationService : BaseService<T_Pro_Menu>, INavigationService
    {
        public JObject AddNavigation(JObject json)
        {
            T_Pro_Menu menu = json["ListObj"].ToString() == "" ? new T_Pro_Menu() : JsonConvert.DeserializeObject<T_Pro_Menu>(json["ListObj"].ToString());
            JObject result = new JObject();
            if (string.IsNullOrEmpty(menu.MenuName))
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("菜单名称不能为空")); 
            }
            

            using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
            {
                try
                {
                    var getMenu = db.FindEntity<T_Pro_Menu>(a => a.MenuID == menu.MenuID);
                    if(getMenu==null)
                    {
                        getMenu = new T_Pro_Menu();
                        getMenu.MenuName = menu.MenuName;
                        getMenu.ModuleId = "0001";
                        getMenu.SysFlag = "GLXT";
                        getMenu.sortid = menu.sortid;
                        getMenu.ParentID = 0;
                        getMenu.url = menu.url;
                        getMenu.isdelete = 0;
                        db.Insert(getMenu);
                        
                    }
                    if(getMenu !=null && getMenu.ParentID==0)
                    {
                        var getMenuName = db.FindEntity<T_Pro_Menu>(a => a.MenuName == menu.MenuName);
                        if(getMenuName!=null)
                        {
                            result.Add(ResultInfo.Result, JToken.FromObject(false));
                            result.Add(ResultInfo.Content, JToken.FromObject("菜单名称已存在"));
                            return result;
                        }
                        getMenu.ParentID = getMenu.MenuID;
                        getMenu.MenuName = menu.MenuName;
                        db.Insert(getMenu);
                    }
                }
                catch(Exception ex)
                {

                }
                db.Commit();
                result.Add(ResultInfo.Result, true);
            }
            return result;
        }

        public JObject DeleteNavigation(JObject json)
        {
            Admin_Sys_Navigations _admin_Sys_Navigations = json["ListObj"].ToString() == "" ? new Admin_Sys_Navigations() : JsonConvert.DeserializeObject<Admin_Sys_Navigations>(json["ListObj"].ToString());
            JObject result = new JObject();
            using (var db = new RepositoryBase().BeginTrans())
            {
                db.Delete(_admin_Sys_Navigations);
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

        public JObject EditNavigation(JObject json)
        {
            T_Pro_Menu menu = json["ListObj"].ToString() == "" ? new T_Pro_Menu() : JsonConvert.DeserializeObject<T_Pro_Menu>(json["ListObj"].ToString());
            JObject result = new JObject();
            if (string.IsNullOrEmpty(menu.MenuName))
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("菜单名称不能为空"));
            }


            using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
            {
                try
                {
                    var getMenu = db.FindEntity<T_Pro_Menu>(a => a.MenuID == menu.MenuID);
                    if (getMenu == null)
                    {
                        result.Add(ResultInfo.Result, JToken.FromObject(false));
                        result.Add(ResultInfo.Content, JToken.FromObject("菜单不存在"));
                        return result;

                    }
                    if (getMenu != null)
                    {
                        getMenu.MenuName = menu.MenuName;
                        getMenu.url = menu.url;
                        getMenu.sortid = menu.sortid;
                        db.Update(getMenu);
                    }
                }
                catch (Exception ex)
                {

                }
                db.Commit();
                result.Add(ResultInfo.Result, true);
            }
            return result;
        }

        /// <summary>
        /// 获取导航菜单列表
        /// </summary>
        /// <param name="menuId">默认状态0</param>
        /// <param name="currentUser">用户信息</param>
        /// <returns></returns>
        public ConcurrentDictionary<string, string> GetClientsDataJson(int menuId, CurrentLogin currentUser)
        {
            //SqlParameter[] prams = new SqlParameter[3];
            //prams[0] = new SqlParameter("@MODULE_ID", 0001);
            //prams[1] = new SqlParameter("@USERID", currentUser.UserName);
            //prams[2] = new SqlParameter("@SysFlag", "GLXT");
            //var ss = DBFactory.oas;
            using (oasEntities entity = new oasEntities())
            {
                var list = entity.UP_GetUserMenu("0001", currentUser.User_Id, "GLXT").ToList();
                var menuList = new List<MenuModel>();

                foreach (var item in list.Where(it => it.ParentID == menuId))
                {
                    var menuModel = new MenuModel();
                    menuModel.Id = item.MenuID;
                    menuModel.Name = item.MenuName;
                    menuModel.SortCode = (int)item.SortID;

                    menuModel.ChildNodes =
                        list.Where(c => c.ParentID == item.MenuID)
                            .Select(
                                c =>
                                    new ChildNodes
                                    {
                                        Id = c.MenuID,
                                        Name = c.MenuName,
                                        UrlAddress = c.Url,
                                        SortCode = (int)c.SortID
                                    })
                            .OrderBy(c => c.SortCode).ToList();
                    menuList.Add(menuModel);
                }
                menuList = menuList.OrderBy(c => c.SortCode).ToList();
                var info = new ConcurrentDictionary<string, string>();
                info.TryAdd("authorizeMenu", menuList.ToJson());
                return info;
            } 
        }


        public JObject GetList(string parentId)
        {

            var adminNavigation = repository.IQueryable<Admin_Sys_Navigations>(a => a.ParentID == int.Parse(parentId));
            JObject result = new JObject();
            if (adminNavigation == null)
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("没有找到匹配数据"));
            }
            else
            {
                result.Add(ResultInfo.Result, JToken.FromObject(true));
                result.Add(ResultInfo.Content, JToken.FromObject(adminNavigation.ToList()));
            }
            return result;
        }
    }
}
