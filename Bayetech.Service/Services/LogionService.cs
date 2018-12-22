using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Data.Entity;

namespace Bayetech.Service 
{
    public class LogionService : BaseService<T_Pub_User>, ILogionService
    {
        /// <summary>
        /// 获取用户登录信息
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetVerificationLogion(JObject json)
        {
            repository = new RepositoryBase(DBFactory.oas);
            T_Pub_User t_pub_user = (T_Pub_User)JsonConvert.DeserializeObject(json.ToString(), typeof(T_Pub_User));
            T_Pub_User user = repository.FindEntity<T_Pub_User>(a => a.User_ID == t_pub_user.User_ID);
            JObject result = new JObject();
            if (user != null)
            {
                if (user.IsAvailab == 1)
                {
                    string dbPassword = Md5.EncryptString(t_pub_user.User_PWD);
                    if (dbPassword == user.User_PWD)
                    {
                        //数据库对象
                        //Admin_Sys_Login _login = new Admin_Sys_Login();
                        //_login.LoginId = new Guid().ToString();
                        //_login.LoginIp = Common.GetHostAddress();
                        //_login.LoginTime = DateTime.Now;
                        //_login.UserName = _adminUser.UserName;
                        //_login.Message = "登录成功";

                        CurrentLogin _currentLogin = new CurrentLogin();
                        _currentLogin.LoginIp = Common.GetHostAddress();
                        _currentLogin.LoginIpInt = Common.IpToInt(_currentLogin.LoginIp);
                        _currentLogin.UserName = user.User_Name;
                        _currentLogin.User_Id = user.User_ID;
                        _currentLogin.User_Code = user.User_Code;
                        _currentLogin.PassWord = user.User_PWD;
                        _currentLogin.LoginTime = DateTime.Now;
                        _currentLogin.Message = "登录成功";

                        var cont= System.Web.HttpContext.Current;
                        cont.Session["CurrentLogin"] = _currentLogin;
                        System.Web.HttpContext.Current.Session.Timeout = 720;//登录缓存720分钟过期
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
                result.Add(ResultInfo.Result, JToken.FromObject(false));
                result.Add(ResultInfo.Content, JToken.FromObject("账户不存在,请联系管理员!"));
            }
            return result;

        }
    }
}
