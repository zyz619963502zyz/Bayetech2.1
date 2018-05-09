using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
     public interface IAdminService//IUserService
    {
        /// <summary>
        /// 员工登陆验证
        /// </summary>
        /// <param name="userName">员工姓名</param>
        /// <param name="passWord">员工密码</param>
        /// <returns></returns>
        bool GetVerificationLogion(string userName, string passWord);
    }
}
