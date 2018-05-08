using Bayetech.Core.Entity;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
