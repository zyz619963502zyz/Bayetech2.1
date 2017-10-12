using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.DAL.Entity;

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


        //登录校验
        //public UserEntity CheckLogin(string username, string password)
        //{
        //    UserEntity userEntity = service.FindEntity(t => t.F_Account == username);
        //    if (userEntity != null)
        //    {
        //        if (userEntity.F_EnabledMark == true)
        //        {
        //            UserLogOnEntity userLogOnEntity = userLogOnApp.GetForm(userEntity.F_Id);
        //            string dbPassword = Md5.md5(DESEncrypt.Encrypt(password.ToLower(), userLogOnEntity.F_UserSecretkey).ToLower(), 32).ToLower();
        //            if (dbPassword == userLogOnEntity.F_UserPassword)
        //            {
        //                DateTime lastVisitTime = DateTime.Now;
        //                int LogOnCount = (userLogOnEntity.F_LogOnCount).ToInt() + 1;
        //                if (userLogOnEntity.F_LastVisitTime != null)
        //                {
        //                    userLogOnEntity.F_PreviousVisitTime = userLogOnEntity.F_LastVisitTime.ToDate();
        //                }
        //                userLogOnEntity.F_LastVisitTime = lastVisitTime;
        //                userLogOnEntity.F_LogOnCount = LogOnCount;
        //                userLogOnApp.UpdateForm(userLogOnEntity);
        //                return userEntity;
        //            }
        //            else
        //            {
        //                throw new Exception("密码不正确，请重新输入");
        //            }
        //        }
        //        else
        //        {
        //            throw new Exception("账户被系统锁定,请联系管理员");
        //        }
        //    }
        //    else
        //    {
        //        throw new Exception("账户不存在，请重新输入");
        //    }
        //}
    }
}
