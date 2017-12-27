using Bayetech.Core.Entity;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
        public JObject GetGroupByGameId(int gameId)
        {
            return serverService.GetList(a => a.ParentId == 0 && a.GameId == gameId && !a.IsDelete);
        }

        /// <summary>
        /// 根据区服获取服务器
        /// </summary>
        /// <param name="pid"></param>
        /// <returns></returns>
        public JObject GetServerByParentId(int parenId)
        {
            return serverService.GetList(a => a.ParentId == parenId && !a.IsDelete);
        }
    }
}
