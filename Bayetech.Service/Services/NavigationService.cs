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

namespace Bayetech.Service
{
    public class NavigationService : BaseService<Admin_Sys_Navigations>, INavigationService
    {
        public JObject AddNavigation(JObject json)
        {
            Admin_Sys_Navigations _admin_Sys_Navigations = json["ListObj"].ToString() == "" ? new Admin_Sys_Navigations() : JsonConvert.DeserializeObject<Admin_Sys_Navigations>(json["ListObj"].ToString());
            JObject result = new JObject();
            if (string.IsNullOrEmpty(_admin_Sys_Navigations.NavTitle))
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("菜单名称不能为空")); 
            }
            var _adminNavigation = repository.FindEntity<Admin_Sys_Navigations>(a=>a.NavTitle== _admin_Sys_Navigations.NavTitle);
            //if (_adminNavigation != null)
            //{
            //    result.Add(ResultInfo.Result, JToken.FromObject(false));
            //    result.Add(ResultInfo.Content, JToken.FromObject("菜单名称不能重复"));
            //}
            if (_admin_Sys_Navigations.ParentID == 0)
            {
                if(_adminNavigation==null)
                {
                    _admin_Sys_Navigations.KeyId = 0;
                    _admin_Sys_Navigations.IsVisible = true;
                    using (var db = new RepositoryBase().BeginTrans())
                    {
                        db.Insert(_admin_Sys_Navigations);
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
                    _admin_Sys_Navigations.IsVisible = true;
                    using (var db = new RepositoryBase().BeginTrans())
                    {
                        db.Update(_admin_Sys_Navigations);
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
                if (_adminNavigation == null)
                {
                    _admin_Sys_Navigations.KeyId = 0;
                    _admin_Sys_Navigations.IsVisible = true;
                    using (var db = new RepositoryBase().BeginTrans())
                    {
                        db.Insert(_admin_Sys_Navigations);
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
                    _admin_Sys_Navigations.IsVisible = true;
                    using (var db = new RepositoryBase().BeginTrans())
                    {
                        db.Update(_admin_Sys_Navigations);
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

        /// <summary>
        /// 获取导航菜单列表
        /// </summary>
        /// <param name="menuId">默认状态0</param>
        /// <param name="currentUser">用户信息</param>
        /// <returns></returns>
        public ConcurrentDictionary<string, string> GetClientsDataJson(int menuId, Admin_Sys_Users currentUser)
        {
            var db = GetContext();
            
            var list = repository.IQueryable<Admin_Sys_Navigations>(a =>(bool)a.IsVisible).ToList();
            //if (!currentUser.IsAdmin)
            if(menuId>8)
            {
                var currentRole = 0;
                var d = repository.FindEntity<Admin_Sys_UserRoles>(c => c.UserID == 9);//
                if (d != null)
                {
                    currentRole = Convert.ToInt32(d.RoleID);

                    var sql =
                        string.Format(
                            "select s.* FROM [Cup2017].[dbo].[Sys_Navigations] s left join Sys_RoleNavBtns r on s.KeyId=r.NavId where r.RoleId = {0} ",
                            currentRole);
                    //list = repository.<Admin_Sys_Navigations>(sql);
                    //list = list.Where(c => c.IsVisible).ToList();
                }
                else
                {
                    return null;
                }
            }
            var menuList = new List<MenuModel>();

            foreach (var item in list.Where(it => it.ParentID == menuId))
            {
                var menuModel = new MenuModel();
                menuModel.Id = item.KeyId;
                menuModel.Name = item.NavTitle;
                menuModel.Icon = item.iconCls;
                menuModel.SortCode = (int)item.Sortnum;

                menuModel.ChildNodes =
                    list.Where(c => c.ParentID == item.KeyId)
                        .Select(
                            c =>
                                new ChildNodes
                                {
                                    Id = c.KeyId,
                                    Name = c.NavTitle,
                                    UrlAddress = c.Linkurl,
                                    SortCode = (int)c.Sortnum
                                })
                        .OrderBy(c => c.SortCode).ToList();
                menuList.Add(menuModel);
            }
            menuList = menuList.OrderBy(c => c.SortCode).ToList();
            var info = new ConcurrentDictionary<string, string>();
            info.TryAdd("authorizeMenu", menuList.ToJson());
            return info;
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
