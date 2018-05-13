using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Bayetech.Core;

namespace Bayetech.Service
{
    public class UserRolesService : BaseService<Admin_Sys_Roles>, IUserRolesService
    {
        public JObject AddUserRole(JObject json)
        {
            Admin_Sys_UserRoles adminUserRoles = (Admin_Sys_UserRoles)JsonConvert.DeserializeObject(json.Last.Path, typeof(Admin_Sys_UserRoles));
            JObject result = new JObject();
            if (adminUserRoles.RoleID == 0)
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("错误信息如下：角色名称不能为空！"));
            }
            //先判断是否是超级管理员admin，如果是超级管理员，那么角色默认是管理员角色,管理员不允许修改角色
            var userName = repository.FindEntity<Admin_Sys_Users>(c => c.KeyId == adminUserRoles.UserID).UserName;
            if (userName == "admin")
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("超级管理员不允许更换角色名称"));
                return result;
            }
            var entity = repository.FindEntity<Admin_Sys_UserRoles>(a=>a.UserID==adminUserRoles.UserID);
            if(entity==null)
            {
                var addRole = repository.Insert<Admin_Sys_UserRoles>(adminUserRoles);
                if(addRole > 0)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                    result.Add(ResultInfo.Content, JProperty.FromObject("角色分配成功"));
                }
                else
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("角色分配失败"));
                }
            }
            else
            {
                var updateRole = repository.Update<Admin_Sys_UserRoles>(adminUserRoles);
                if(updateRole>0)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                    result.Add(ResultInfo.Content, JProperty.FromObject("角色更新成功"));
                }
                else
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("角色更新失败"));
                }
            }
            return result;
        }
        public JObject GetIsRoles(JObject json)
        {
            Admin_Sys_Users _admin_Sys_User = (Admin_Sys_Users)JsonConvert.DeserializeObject(json.Last.Path, typeof(Admin_Sys_Users));
            var userName = repository.FindEntity<Admin_Sys_Users>(a => a.KeyId == _admin_Sys_User.KeyId).UserName;
            JObject result = new JObject();
            if (userName == "admin")
            {
                var role = repository.FindEntity<Admin_Sys_Roles>(a => a.RoleName == "管理员");
                if (role == null)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("没有这个角色"));
                }
                else
                {
                    var view = new UserRoleView
                    {
                        Keyid = 0,
                        RoleID = role.KeyId,
                        RoleName = role.RoleName,
                        UserID = _admin_Sys_User.KeyId,
                        UserName = userName
                    };
                    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                    result.Add(ResultInfo.Content, JProperty.FromObject(view));
                }
            }

            var userRoles = repository.FindEntity<Admin_Sys_UserRoles>(a=>a.UserID== _admin_Sys_User.KeyId);
            if(userRoles==null)
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("没有角色存在"));
            }
            else
            {
                Admin_Sys_UserRoles model = null;
                IEnumerable<UserRoleView> userRoleView = from a in repository.IQueryable<Admin_Sys_Users>()
                                                         join b in repository.IQueryable<Admin_Sys_UserRoles>() on a.KeyId equals b.UserID
                                                         join c in repository.IQueryable<Admin_Sys_Roles>() on a.KeyId equals c.KeyId
                                                         select new UserRoleView
                                                         {
                                                             Keyid = a.KeyId,
                                                             UserName = a.UserName,
                                                             RoleID = b.RoleID,
                                                             RoleName = c.RoleName,
                                                         };
                foreach (var s in userRoleView)
                {
                    model = s;
                }
                result.Add(ResultInfo.Result, JProperty.FromObject(true));
                result.Add(ResultInfo.Content, JProperty.FromObject(model));
            }
            
            return result;
        }
    }
}
