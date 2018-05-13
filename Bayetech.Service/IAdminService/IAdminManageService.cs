using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public interface IAdminManageService
    {
        /// <summary>
        /// 获取员工表1
        /// </summary>
        /// <returns></returns>
        JObject GetUserList();
        /// <summary>
        /// 添加员工
        /// </summary>
        /// <param name="json">添加信息</param>
        /// <param name="UserId">当前登录用户id</param>
        /// <returns></returns>
        JObject AddUser(JObject json, int UserId);
       
    }
}
