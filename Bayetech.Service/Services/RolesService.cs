﻿using System;
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

namespace Bayetech.Service
{
    public class RolesService :BaseService<Admin_Sys_Roles>, IRolesService
    {
        public JObject AddRoles(JObject json)
        {
            Admin_Sys_Roles _admin_Sys_Roles = json["ListObj"].ToString() == "" ? new Admin_Sys_Roles() : JsonConvert.DeserializeObject<Admin_Sys_Roles>(json["ListObj"].ToString());
            JObject result = new JObject();
            if (string.IsNullOrEmpty(_admin_Sys_Roles.RoleName))
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("菜单名称不能为空"));
            }
            var _adminNavigation = repository.FindEntity<Admin_Sys_Roles>(a => a.RoleName == _admin_Sys_Roles.RoleName);
            if (_adminNavigation != null)
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("菜单名称不能重复"));
            }
            else
            {
                if (_admin_Sys_Roles.KeyId == 0)
                {
                    using (var db = new RepositoryBase().BeginTrans())
                    {
                        db.Insert(_admin_Sys_Roles);
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
                        db.Update(_admin_Sys_Roles);
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

        public JObject DeleteRoles(JObject json)
        {
            JObject result = new JObject();
            Admin_Sys_Roles _admin_Sys_Roles = json["ListObj"].ToString() == "" ? new Admin_Sys_Roles() : JsonConvert.DeserializeObject<Admin_Sys_Roles>(json["ListObj"].ToString());
            using (var db = new RepositoryBase().BeginTrans())
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
            json = json ?? new JObject();
            Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("KeyId") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
            Expression<Func<Admin_Sys_Roles, bool>> expression = PredicateExtensions.True<Admin_Sys_Roles>();
            PaginationResult<List<Admin_Sys_Roles>> ResultPage = new PaginationResult<List<Admin_Sys_Roles>>();
            var userList = repository.FindList(page ?? Pagination.GetDefaultPagination("KeyId"), out page, expression);
            JObject result = new JObject();
            if (!string.IsNullOrEmpty(json["Param"]["Type"].ToString()))
            {
                userList = userList.FindAll(a => a.RoleName.Contains(json["Param"]["Type"].ToString()));
            }
            ResultPage.datas = userList.ToList();

            //权限分配菜单
            var list = repository.IQueryable<Admin_Sys_Navigations>(a => (bool)a.IsVisible).ToList();
            var menuList = new List<NavigationModel>();
            foreach (var item in list.Where(it => it.ParentID == 0))
            {
                var menuModel = new NavigationModel();
                menuModel.KeyId = item.KeyId;
                menuModel.NavTitle = item.NavTitle;
                menuModel.Linkurl = item.Linkurl;
                menuModel.Sortnum = (int)item.Sortnum;
                menuModel.ParentID = (int)item.ParentID;

                menuModel.ChildNodes =
                    list.Where(c => c.ParentID == item.KeyId)
                        .Select(
                            c =>
                                new ChilNavdNodes
                                {
                                    KeyId = c.KeyId,
                                    NavTitle = c.NavTitle,
                                    Linkurl = c.Linkurl,
                                    Sortnum = (int)c.Sortnum,
                                    ParentID = (int)c.ParentID
                                })
                        .OrderBy(c => c.Sortnum).ToList();
                menuList.Add(menuModel);
            }
            menuList = menuList.OrderBy(c => c.Sortnum).ToList();
            if (page != null)
            {
                ResultPage.pagination = page;
            }
            if (ResultPage.datas.Count > 0)
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(true));
                result.Add(ResultInfo.Content, JProperty.FromObject(ResultPage));
                result.Add("RolesMenu", JProperty.FromObject(menuList));
            }
            else
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("无数据"));
            }

            return result;
        }

        public JObject RolesGetTree()
        {
            JObject result = new JObject();
            var list = repository.IQueryable<Admin_Sys_Navigations>(a => (bool)a.IsVisible).ToList();
            var nav = GetChildMenu(list, 0);
            if(nav.Count>0)
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

        private static IList<NavTreeModel> GetChildMenu(IList<Admin_Sys_Navigations> list, int id)
        {
            IList<NavTreeModel> entitys = new List<NavTreeModel>();
            foreach (var item in list.Where(it => it.ParentID == id))
            {
                var entity = new NavTreeModel();
                entity.KeyId = item.KeyId;
                entity.Sortnum = item.Sortnum;
                entity.NavTitle = item.NavTitle;
                entity.NavTag = item.NavTag;

                entity.Linkurl = item.Linkurl;
                entity.IsVisible = item.IsVisible;
                entity.iconCls = item.iconCls;
                entity.ParentID = item.ParentID;

                entity.id = entity.KeyId;
                entity.text = entity.NavTitle;

                entity.nodes = GetChildMenu(list, item.KeyId);
                entitys.Add(entity);
            }
            entitys = entitys.OrderByDescending(c => c.KeyId).ToList();
            return entitys;
        }

        public JObject RolesGetTrees(int id)
        {
            JObject result = new JObject();
            var list = repository.IQueryable<Admin_Sys_RoleNavBtns>(a => a.RoleId==id).ToList();
            var ret = list.Select(c => new { KeyId = c.NavId, state = true });
            if (list==null)
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
}
