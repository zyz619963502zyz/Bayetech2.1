using Bayetech.Core.Entity;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class GoodTypeController : ApiController
    {
        BaseService<vw_GoodTypes> mallTypeService = new BaseService<vw_GoodTypes>();
        /// <summary>
        /// 获取交易类型
        /// </summary>
        /// <param name="gameId"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public JObject GetGoodType(int gameId,int type, string name = null)
        {
            name = Core.Common.Trim(name);
            if (string.IsNullOrEmpty(name))
            {
                return mallTypeService.GetList(t => t.GameId == gameId && t.Type== type);
            }
            else
            {
                return mallTypeService.GetList(t => t.GameId == gameId && t.Type == type && t.Name.Contains(name));
            }
        }

        /// <summary>
        /// 获取代练类型
        /// </summary>
        /// <param name="gameId"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetDLType(int gameId, string name = null)
        {
            name = Core.Common.Trim(name);
            if (string.IsNullOrEmpty(name))
            {
                return mallTypeService.GetList(t => t.GameId == gameId && t.Type == 4);
            }
            else
            {
                return mallTypeService.GetList(t => t.GameId == gameId && t.Type == 4 && t.Name.Contains(name));
            }
        }
    }
}
