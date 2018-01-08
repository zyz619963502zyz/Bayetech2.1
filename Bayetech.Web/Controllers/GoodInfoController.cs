using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.Core.Enum;
using Bayetech.Service;
using Bayetech.Service.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class GoodInfoController : BaseController
    {
        //取出服务层
        GoodInfoService service = ctx.GetObject("GoodInfoService") as GoodInfoService;
        BaseService<GameProfession> proBase = new BaseService<GameProfession>();
        BaseService<Server> severBase = new BaseService<Server>();

        /// <summary>
        /// 获取区服名称
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JObject GetGoupNames(int gameId,string type)
        {
            JObject ret = new JObject();
            List<Server> servers;
            if (type == "Group")
            {
                servers = severBase.FindList(c => c.GameId == gameId && c.ParentId == 0).ToList();
                ret.Add(ResultInfo.Result, true);
                ret.Add(ResultInfo.Content, JProperty.FromObject(servers));
            }
            else if (type == "Server")
            {
                servers = severBase.FindList(c => c.GameId == gameId && c.ParentId != 0).ToList();
                ret.Add(ResultInfo.Result, true);
                ret.Add(ResultInfo.Content, JProperty.FromObject(servers));
            }
            else
            {
                ret.Add(ResultInfo.Result, false);
                ret.Add(ResultInfo.Content,"暂无此游戏区服信息");
            }
            return ret;
        }

        /// <summary>
        /// 获取角色职业
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JObject GetProfessions(int gameId)
        {
            JObject ret = new JObject();
            List<GameProfession> professions = proBase.FindList(c => c.GameId == gameId).ToList();
            ret.Add(ResultInfo.Result, true);
            ret.Add(ResultInfo.Content, JProperty.FromObject(professions));
            return ret;
        }

        /// <summary>
        /// 获取列表页数据
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject GetList(JObject json)
        {
            //vw_MallGoodMainInfo goodInfo = JsonConvert.DeserializeObject<vw_MallGoodMainInfo>(json.ToString());两个外层括号导致无法反序列化
            vw_MallGoodMainInfo goodInfo = JsonConvert.DeserializeObject<vw_MallGoodMainInfo>(json["param"].ToString());
            Pagination page = JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString()); 
            return service.GetGoodList(goodInfo, page);
        }


        /// <summary>
        /// 获取详情页信息
        /// </summary>
        /// <param name="goodNo"></param>
        /// <returns></returns>
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

        /// <summary>
        /// 获取商品需要的账号输入框
        /// </summary>
        /// <param name="gameId"></param>
        /// <param name="goodTypeId"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetAccountComponents(int gameId, int goodTypeId)
        {
            var list = service.GetAccountComponents(gameId, goodTypeId);
            return Core.Common.PackageJObect(list.Count > 0, list);
        }

        [HttpPost]
        public bool PublicGood(JObject json)
        {
            MallGoodInfo goodInfo = JsonConvert.DeserializeObject<MallGoodInfo>(json.First.Path);
            var goodInfo2 = new MallGoodInfo();
            var gameId = json.Property("gameId").Value;
            var propertyList = new List<GoodProperty>();

            return false;
        }

    }  
}
