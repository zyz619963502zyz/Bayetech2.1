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
        JObject GetUserList(JObject json, DateTime? StartTime, DateTime? EndTime);
        /// <summary>
        /// 添加员工
        /// </summary>
        /// <param name="json">添加信息</param>
        /// <param name="UserId">当前登录用户id</param>
        /// <returns></returns>
        JObject AddUser(JObject json, int UserId);
        /// <summary>
        /// 导航页面列表
        /// </summary>
        /// <param name="json"></param>
        /// <param name="StartTime"></param>
        /// <param name="EndTime"></param>
        /// <returns></returns>
        JObject GetNavgationList(JObject json, DateTime? StartTime, DateTime? EndTime);
        /// <summary>
        /// 删除员工
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        JObject DeleteUser(JObject json);
        /// <summary>
        /// 设置角色
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        JObject AddRoles(JObject json);


    }
}
