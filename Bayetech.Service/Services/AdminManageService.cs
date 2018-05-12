using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.Core.Entity;
using Bayetech.Core;
using Newtonsoft.Json;

namespace Bayetech.Service
{
    /// <summary>
    /// 
    /// </summary>
    public class AdminManageService : BaseService<Admin_Sys_Users>,IAdminManageService
    {
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
            if (_admin_Sys_User.KeyId<=0)
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

        public JObject GetUserList()
        {
            var userList = repository.IQueryable<Admin_Sys_Users>();
            JObject result = new JObject();
            if (userList != null)
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(true));
                result.Add(ResultInfo.Content, JProperty.FromObject(userList.ToList()));
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
