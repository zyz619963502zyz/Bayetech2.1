using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.Core.Entity;
using System;
using Bayetech.Core;
using Bayetech.Service.IServices;
using System.Web;

namespace Bayetech.Service.Services
{
    public partial class UserService : BaseService<User>, IUserService
    {
        /// <summary>
        /// 创建账号
        /// </summary>
        /// <param name="json">账号信息</param>
        /// <returns></returns>
        public bool CreatAccount(JObject json)
        {

            using (var db = new RepositoryBase().BeginTrans())
            {
                User _account = (User)JsonConvert.DeserializeObject(json.First.Path, typeof(User));
                _account.Password = Md5.EncryptString(_account.Password);
                _account.IsValiteLogin = true;
                db.Insert(_account);
                int count = db.Commit();
                return count > 0 ? true : false;
            }
        }

        /// <summary>
        /// 验证账号重复性
        /// </summary>
        /// <param name="account">注册账号</param>
        /// <returns></returns>
        public bool CheckAccount(string account)
        {
            using (var db = new RepositoryBase())
            {
                User _account = db.FindEntity<User>(c => c.Name == account);
                return _account == null ? true : false;//true不重复可申请，false不可申请
            }
        }


        /// <summary>
        /// 登陆校验
        /// </summary>
        /// <param name="username">登录账号</param>
        /// <param name="password">登录密码</param>
        /// <returns></returns>
        public JObject CheckLogin(JObject json)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
                User _account = (User)JsonConvert.DeserializeObject(json.First.Path, typeof(User));//转换对象
                User _userEntity = db.FindEntity<User>(t => t.Name == _account.Name);
                JObject result = new JObject();
                if (_userEntity != null)
                {
                    if ((bool)_userEntity.IsValiteLogin)
                    {
                        //UserLogOnEntity userLogOnEntity = userLogOnApp.GetForm(userEntity.F_Id);
                        //string dbPassword = Md5.md5(DESEncrypt.Encrypt(password.ToLower(), userLogOnEntity.F_UserSecretkey).ToLower(), 32).ToLower();
                        string dbPassword = Md5.EncryptString(_account.Password);
                        if (dbPassword == _userEntity.Password)
                        {
                            Login _currentLogin = new Login();
                            _currentLogin.UserName = _account.Name;
                            _currentLogin.PassWord = dbPassword;
                            _currentLogin.LoginIp = Common.GetHostAddress();
                            _currentLogin.LoginTime = DateTime.Now;
                            _currentLogin.Message = "登录成功";
                            db.Insert(_currentLogin);
                            db.Commit();  
                            result.Add(ResultInfo.Result, JProperty.FromObject(true));
                            result.Add(ResultInfo.Content, JProperty.FromObject(_currentLogin.Message));
                            //创建标识

                            var token = Md5.EncryptString(_account.Id + DateTime.Now);
                            HttpContext.Current.Session["token"] = token;
                            HttpContext.Current.Response.Cookies["token"].Value = token;
                            HttpContext.Current.Response.Cookies["token"].Expires.AddDays(1);
                        }
                        else
                        {
                            result.Add(ResultInfo.Result, JProperty.FromObject(false));
                            result.Add(ResultInfo.Content, JProperty.FromObject("密码错误,请重新尝试!"));
                        }
                    }
                    else
                    {
                        result.Add(ResultInfo.Result, JProperty.FromObject(false));
                        result.Add(ResultInfo.Content, JProperty.FromObject("账户被系统锁定,请联系管理员!"));
                    }
                }
                else
                {
                    result.Add(ResultInfo.Result, JProperty.FromObject(false));
                    result.Add(ResultInfo.Content, JProperty.FromObject("账户不存在，请重新输入!"));
                }
                return result;
            }
        }

        public bool GetVerificationLogion(string userName, string passWord)
        {
            throw new NotImplementedException();
        }
    }
}
