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
            if (page != null)
            {
                ResultPage.pagination = page;
            }
            if (ResultPage.datas.Count > 0)
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(true));
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
}
