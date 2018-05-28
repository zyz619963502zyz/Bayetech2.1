using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;

namespace Bayetech.Service
{
    public class LogionService : BaseService<Admin_Sys_Users>, ILogionService
    {
        /// <summary>
        /// 获取用户登录信息
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetVerificationLogion(JObject json)
        {
            Admin_Sys_Users _admin_Sys_User = (Admin_Sys_Users)JsonConvert.DeserializeObject(json.ToString(), typeof(Admin_Sys_Users));
            Admin_Sys_Users _adminUser = repository.FindEntity<Admin_Sys_Users>(a=>a.UserName==_admin_Sys_User.UserName);
            JObject result = new JObject();
            if (_adminUser != null)
            {
                if (_adminUser.IsDisabled == false)
                {
                    string dbPassword = Md5.EncryptString(_admin_Sys_User.Password);
                    if (dbPassword == _adminUser.Password)
                    {
                        CurrentLogin _currentLogin = new CurrentLogin();
                        _currentLogin.UserName = _adminUser.UserName;
                        _currentLogin.PassWord = _adminUser.Password;
                        _currentLogin.LoginIp = Common.GetHostAddress();
                        _currentLogin.LoginTime = DateTime.Now;
                        _currentLogin.Message = "登录成功";

                        var cont= System.Web.HttpContext.Current;
                        cont.Session["CurrentLogin"] = _currentLogin;

                        var dd= System.Web.HttpContext.Current.Session["CurrentLogin"] ?? new CurrentLogin();
                        result.Add(ResultInfo.Result, JToken.FromObject(true));
                        result.Add(ResultInfo.Content, JToken.FromObject(_currentLogin.Message));
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, JToken.FromObject(false));
                        result.Add(ResultInfo.Content, JToken.FromObject("密码错误,请重新尝试!"));
                    }
                }
                else
                {
                    result.Add(ResultInfo.Result, JToken.FromObject(false));
                    result.Add(ResultInfo.Content, JToken.FromObject("密码被禁用,请联系管理员!"));
                }
            }
            else
            {
                result.Add(ResultInfo.Result, JProperty.FromObject(false));
                result.Add(ResultInfo.Content, JProperty.FromObject("账户不存在,请联系管理员!"));
            }
            return result;

        }
    }
}
