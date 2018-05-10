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

namespace Bayetech.Service
{
    public class NavigationService : BaseService<Admin_Sys_Navigations>, INavigationService
    {
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
    }
}
