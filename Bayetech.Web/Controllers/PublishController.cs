using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.Services;
using Jayrock.Json.Conversion;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class PublishController : ApiController
    {
        BaseService<Settings> service = new BaseService<Settings>();
        GameService gameservice = new GameService();


        /// <summary>
        /// 获取发布页面的默认参数
        /// </summary>
        /// <param name="json">游戏参数</param>
        /// <returns></returns>
        [HttpPost]
        public JObject GetAllDefaults(JObject json) {
            //获取QQ等级信息
            var QQLvs = service.FindList(s => s.ParentId == 72);
            //获取职业，区服等信息
            JObject ret = gameservice.GetGameService(json);
            ret.Add("QQLvs", JToken.FromObject(QQLvs));
            return ret;
        }

    }
}
