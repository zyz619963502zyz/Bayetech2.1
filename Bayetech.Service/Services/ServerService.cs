using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Services
{
    public class ServerService : BaseService<Server>
    {


        /// <summary>
        /// 获取游戏区服
        /// </summary>
        /// <param name="gameId"></param>
        /// <returns></returns>
        public JObject GetGroup(int gameId, string name = "")
        {
            name = Core.Common.Trim(name);
            if (string.IsNullOrEmpty(name))
            {
                return GetList(a => a.ParentId == 0 && a.GameId == gameId && !a.IsDelete);
            }
            else
            {
                return GetList(a => a.ParentId == 0 && a.GameId == gameId && !a.IsDelete && a.Name.Contains(name));
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
                return GetList(a => a.ParentId == parenId && !a.IsDelete);
            }
            else
            {
                return GetList(a => a.ParentId == parenId && !a.IsDelete && a.Name.Contains(name));
            }

        }

        /// <summary>
        /// 获取DNF跨区
        /// </summary>
        /// <param name="pid"></param>
        /// <returns></returns>
        public IQueryable<Server> GetDNFAcross(string name = null)
        {
            name = Core.Common.Trim(name);
            if (string.IsNullOrEmpty(name))
            {
                return FindList(a => a.ParentId == -1&&a.GameId==1 && !a.IsDelete);
            }
            else
            {
                return FindList(a => a.ParentId == -1 && a.GameId == 1 && !a.IsDelete && a.Name.Contains(name));
            }
        }

        /// <summary>
        /// 根据区跨区取服务器
        /// </summary>
        /// <param name="pid"></param>
        /// <returns></returns>
        public IQueryable<Server> GetDNFServerByAcross(int AcrossId, string name = null)
        {
            name = Core.Common.Trim(name);
            if (string.IsNullOrEmpty(name))
            {
                return FindList(a => a.Remark == AcrossId.ToString() && !a.IsDelete);
            }
            else
            {
                return FindList(a => a.Remark == AcrossId.ToString() && !a.IsDelete && a.Name.Contains(name));
            }

        }
    }
}
