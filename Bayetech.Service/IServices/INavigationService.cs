using Bayetech.Core.Entity;
using System.Collections.Concurrent;

namespace Bayetech.Service
{
    public interface INavigationService
    {
        /// <summary>
        /// 获取导航菜单列表
        /// </summary>
        /// <param name="menuId">默认状态0</param>
        /// <param name="currentUser">用户信息</param>
        /// <returns></returns>
        ConcurrentDictionary<string, string> GetClientsDataJson(int menuId, Admin_Sys_Users currentUser);
    }
}
