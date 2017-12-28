using Bayetech.Core.Entity;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class GoodTypeController : ApiController
    {
        BaseService<vw_GoodTypes> mallTypeService = new BaseService<vw_GoodTypes>();
        public JObject GetGoodTypeByGameId(int gameId)
        {
            return mallTypeService.GetList(t=>t.GameId==gameId);
        }
    }
}
