using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System.Collections.Concurrent;

namespace Bayetech.Service
{
    public interface INavigationService
    {
        /// <summary>
        /// 获取导航菜单maen
        /// </summary>
        /// <param name="menuId">默认状态0</param>
        /// <param name="currentUser">用户信息</param>
        /// <returns></returns>
        ConcurrentDictionary<string, string> GetClientsDataJson(int menuId, CurrentLogin currentUser);
        /// <summary>
        /// 获取导航菜单列表
        /// </summary>
        /// <param name="parentId"></param>
        /// <returns></returns>
        JObject GetList(string parentId);

        /// <summary>
        /// 添加和修改导航菜单
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        JObject AddNavigation(JObject json);
        /// <summary>
        /// 删除导航菜单
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        JObject DeleteNavigation(JObject json);


    }
}
