using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.DAL.Entity;
using System;
using Bayetech.Core;

namespace Bayetech.Service
{
    public class LoginSignService : ILoginSignService
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
                Account _account = (Account)JsonConvert.DeserializeObject(json.ToString(), typeof(Account));
                int count = db.Insert(_account);
                db.Commit();
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
                Account _account = db.FindEntity<Account>(c => c.GameUser == account); 
                return _account == null ? true : false;//true不重复可申请，false不可申请
            }
        }


        /// <summary>
        /// 登陆校验
        /// </summary>
        /// <param name="username">登录账号</param>
        /// <param name="password">登录密码</param>
        /// <returns></returns>
        public Account CheckLogin(string username, string password)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
                Account _userEntity = db.FindEntity<Account>(t => t.GameUser == username);
                if (_userEntity != null)
                {
                    if (_userEntity.EnableMark == true)
                    {
                        //UserLogOnEntity userLogOnEntity = userLogOnApp.GetForm(userEntity.F_Id);
                        //string dbPassword = Md5.md5(DESEncrypt.Encrypt(password.ToLower(), userLogOnEntity.F_UserSecretkey).ToLower(), 32).ToLower();
                        string dbPassword = Md5.EncryptString(password);
                        if (dbPassword == _userEntity.GamePass)
                        {
                            Login _currentLogin = new Login();
                            _currentLogin.UserName = username;
                            _currentLogin.PassWord = dbPassword;
                            _currentLogin.LoginIp = Common.GetHostAddress();
                            _currentLogin.logintime = DateTime.Now;
                            _currentLogin.message = "登录成功";
                            db.Insert(_currentLogin);
                            db.Commit();
                            return _userEntity;
                        }
                        else
                        {
                            throw new Exception("密码不正确，请重新输入");
                        }
                    }
                    else
                    {
                        throw new Exception("账户被系统锁定,请联系管理员");
                    }
                }
                else
                {
                    throw new Exception("账户不存在，请重新输入");
                }
            }
        }
    }
}
