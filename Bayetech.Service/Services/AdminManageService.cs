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
    /// <summary>
    /// 
    /// </summary>
    public class AdminManageService : BaseService<Admin_Sys_Users>, IAdminManageService
    {
        /// <summary>
        /// 添加一个新的用户
        /// </summary>
        /// <param name="json"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        public JObject AddUser(JObject json, int UserId)
        {
            Admin_Sys_Users _admin_Sys_User = (Admin_Sys_Users)JsonConvert.DeserializeObject(json.Last.Path, typeof(Admin_Sys_Users));
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
                    var add = repository.Insert<Admin_Sys_Users>(_admin_Sys_User);
                    if (add == 1)
                    {
                        result.Add(ResultInfo.Result, JProperty.FromObject(true));
                        result.Add(ResultInfo.Content, JProperty.FromObject("添加成功"));
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, JProperty.FromObject(false));
                        result.Add(ResultInfo.Content, JProperty.FromObject("添加失败"));
                    }
                }
            }
            else
            {
                //修改
                var add = repository.Update<Admin_Sys_Users>(_admin_Sys_User);
                if (add == 1)
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(true));
                    result.Add(ResultInfo.Content, JProperty.FromObject("修改成功"));
                }
                else
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("修改失败"));
                }
            }
            return result;
        }

        /// <summary>
        /// 获取用户信息
        /// </summary>
        /// <returns></returns>
        public JObject GetUserList(JObject json, DateTime? StartTime, DateTime? EndTime)
        {
            json = json ?? new JObject();
            Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("KeyId") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
            Expression<Func<Admin_Sys_Users, bool>> expression = PredicateExtensions.True<Admin_Sys_Users>();
            PaginationResult<List<Admin_Sys_Users>> ResultPage = new PaginationResult<List<Admin_Sys_Users>>();
            var userList = repository.FindList(page ?? Pagination.GetDefaultPagination("KeyId"), out page, expression);
            var roles = repository.IQueryable<Admin_Sys_Roles>();//角色列表
            JObject result = new JObject();
            if (!string.IsNullOrEmpty(json["Param"]["Type"].ToString()))
            {
                userList = userList.FindAll(a => a.UserName == json["Param"]["Type"].ToString() || a.TrueName == json["Param"]["Type"].ToString() || a.Mobile == json["Param"]["Type"].ToString());
            }
            ResultPage.datas = userList.ToList();
            if (page != null)
            {
                ResultPage.pagination = page;
            }
            if (ResultPage.datas.Count > 0)
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(true));
                result.Add("RolesList", JProperty.FromObject(roles.ToList()));
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
