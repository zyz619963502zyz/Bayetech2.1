using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.DAL.Entity;
using System;
using Bayetech.Core;
using Bayetech.Service.IServices;

namespace Bayetech.Service.Services
{
    public partial class LoginSignService : ILoginSignService
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
                Account _account = (Account)JsonConvert.DeserializeObject(json.First.Path, typeof(Account));
                _account.PassWord = Md5.EncryptString(_account.PassWord);
                _account.UserName = _account.Iphone;
                _account.ItemId = 15;
                _account.EnableMark = true;
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
                Account _account = db.FindEntity<Account>(c => c.UserName == account);
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
                Account _account = (Account)JsonConvert.DeserializeObject(json.First.Path, typeof(Account));//转换对象
                Account _userEntity = db.FindEntity<Account>(t => t.UserName == _account.UserName);
                JObject result = new JObject();
                if (_userEntity != null)
                {
                    if (_userEntity.EnableMark == true)
                    {
                        //UserLogOnEntity userLogOnEntity = userLogOnApp.GetForm(userEntity.F_Id);
                        //string dbPassword = Md5.md5(DESEncrypt.Encrypt(password.ToLower(), userLogOnEntity.F_UserSecretkey).ToLower(), 32).ToLower();
                        string dbPassword = Md5.EncryptString(_account.PassWord);
                        if (dbPassword == _userEntity.PassWord)
                        {
                            Login _currentLogin = new Login();
                            _currentLogin.UserName = _account.UserName;
                            _currentLogin.PassWord = dbPassword;
                            _currentLogin.LoginIp = Common.GetHostAddress();
                            _currentLogin.LoginTime = DateTime.Now;
                            _currentLogin.Message = "登录成功";
                            db.Insert(_currentLogin);
                            db.Commit();
                            result.Add(ResultInfo.Result, JProperty.FromObject(true));
                            result.Add(ResultInfo.Content, JProperty.FromObject(_currentLogin.Message));
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
    }
}
