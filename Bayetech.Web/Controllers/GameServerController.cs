using Bayetech.Core.Entity;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class GameServerController : ApiController
    {
        BaseService<Server> serverService = new BaseService<Server>();
        /// <summary>
        /// 获取游戏区服
        /// </summary>
        /// <param name="gameId"></param>
        /// <returns></returns>
        public JObject GetGroup(int gameId,string name = "")
        {
            name = Core.Common.Trim(name);
            if (string.IsNullOrEmpty(name))
            {
                return serverService.GetList(a => a.ParentId == 0 && a.GameId == gameId && !a.IsDelete);
            }
            else
            {
                return serverService.GetList(a => a.ParentId == 0 && a.GameId == gameId && !a.IsDelete&&a.Name.Contains(name));
            }
        }

        /// <summary>
        /// 根据区服获取服务器
        /// </summary>
        /// <param name="pid"></param>
        /// <returns></returns>
        public JObject GetServer(int parenId, string name = null)
        {
            name = Core.Common.Trim(name);
            if (string.IsNullOrEmpty(name))
            {
                return serverService.GetList(a => a.ParentId == parenId && !a.IsDelete);
            }
            else
            {
                return serverService.GetList(a => a.ParentId == parenId && !a.IsDelete&&a.Name.Contains(name));
            }
            
        }
    }
}
