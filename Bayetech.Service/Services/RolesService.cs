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

namespace Bayetech.Service
{
    public class RolesService :BaseService<Admin_Sys_Roles>, IRolesService
    {
        public JObject AddRoles(JObject json)
        {
            Admin_Sys_Roles _admin_Sys_Roles = (Admin_Sys_Roles)JsonConvert.DeserializeObject(json.Last.Path, typeof(Admin_Sys_Roles));
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
                    var add = repository.Insert(_admin_Sys_Roles);
                    if (add == 1)
                    {
                        result.Add(ResultInfo.Result, JToken.FromObject(true));
                        result.Add(ResultInfo.Content, JToken.FromObject("操作成功"));
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, JToken.FromObject(false));
                        result.Add(ResultInfo.Content, JToken.FromObject("操作失败"));
                    }
                }
                else
                {
                    var uopdate = repository.Update(_admin_Sys_Roles);
                    if (uopdate == 1)
                    {
                        result.Add(ResultInfo.Result, JToken.FromObject(true));
                        result.Add(ResultInfo.Content, JToken.FromObject("修改成功"));
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, JToken.FromObject(false));
                        result.Add(ResultInfo.Content, JToken.FromObject("修改失败"));
                    }

                }
            }
            return result;
        }

        public JObject DeleteRoles(JObject json)
        {
            Admin_Sys_Roles _admin_Sys_Roles = (Admin_Sys_Roles)JsonConvert.DeserializeObject(json.Last.Path, typeof(Admin_Sys_Roles));
            var deleteNavigations = repository.Delete(_admin_Sys_Roles);
            JObject result = new JObject();
            if (deleteNavigations == 1)
            {
                result.Add(ResultInfo.Result, JToken.FromObject(true));
                result.Add(ResultInfo.Content, JToken.FromObject("删除成功"));
            }
            else
            {
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("删除失败"));
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
