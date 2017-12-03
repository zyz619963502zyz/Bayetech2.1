using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class GoodInfoController : BaseController
    {
        //取出服务层
        GoodInfoService service = ctx.GetObject("GoodInfoService") as GoodInfoService;

        [HttpPost]
        public JObject GetList(JObject json)
        {
            vw_MallGoodMainInfo goodInfo = JsonConvert.DeserializeObject<vw_MallGoodMainInfo>(json.ToString());
            return service.GetGoodList(goodInfo);
        }


        [HttpGet]
        public JObject GetGoodInfo(string goodNo)
        {
            //组装vo对象
            MallGoodInfoModels model = new MallGoodInfoModels();
            JObject result = CreatJObject();
            JObject resultGoodInfo = service.GetGoodInfo(goodNo);//整体
            JObject resultGoodDetailInfo = service.GetGoodInfoDetail(goodNo);//详细
            bool goodInfo = Convert.ToBoolean(resultGoodInfo["result"]);//整体
            bool goodDetail = Convert.ToBoolean(resultGoodDetailInfo["result"]);//详细
            if (goodInfo && goodDetail)//判断整体信息查询结果
            {
                model = JsonConvert.DeserializeObject<MallGoodInfoModels>(resultGoodInfo["content"].ToString());
                model.mallGoodInfo = (List<vw_MallGoodInfo>)JsonConvert.DeserializeObject(resultGoodDetailInfo["content"].ToString(), typeof(List<vw_MallGoodInfo>));
                result.Add(ResultInfo.Result,true);
                result.Add(ResultInfo.Content,JProperty.FromObject(model));
            }
            else
            {
                result.Add(ResultInfo.Result,  false);
                result.Add(ResultInfo.Content, !goodInfo? resultGoodInfo["content"].ToString(): resultGoodDetailInfo["content"].ToString());//返回报错信息
            }
            return result;
        }
    }  
}
