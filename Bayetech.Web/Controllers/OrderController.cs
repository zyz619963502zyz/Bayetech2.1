using Bayetech.Core.Entity;
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
    public class OrderController : BaseController
    {
        //取出服务层
        OrderService service = ctx.GetObject("OrderService") as OrderService;
        BaseService<Server> serverService = new BaseService<Server>();
        BaseService<vw_GameServers> typeService = new BaseService<MallType>();
        [HttpPost]
        public JObject CreatOrder(JObject json)
        {
            MallOrder goodInfo = JsonConvert.DeserializeObject<MallOrder>(json.First.Path);
            return service.CreatOrder(goodInfo);
        }

        /// <summary>
        /// 取出订单信息
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetOrderInfo(JObject json)
        {
            vw_MallOrderInfo order = JsonConvert.DeserializeObject<vw_MallOrderInfo>(json==null? "" : json.First.Path);
            return service.GetOrderInfo(order);
        }

        /// <summary>
        /// 获取类别
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetMallType(int gameId)
        {
            JObject ret = new JObject();
            List<vw_GameServers> types = typeService.FindList(c => c.GameId == gameId).ToList();
            if (types.Count>0)
            {
                ret.Add(ResultInfo.Result, true);
                ret.Add(ResultInfo.Content, JProperty.FromObject(types));
            }
            else
            {
                ret.Add(ResultInfo.Result, false);
            }
            return ret;
        }

        /// <summary>
        /// 获取区服列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetServers(int parentId=0)
        {
            JObject ret = new JObject();
            List<Server> servers = serverService.FindList(c => c.ParentId == parentId).ToList();
            if (servers.Count>0)
            {
                ret.Add(ResultInfo.Result, true);
                ret.Add(ResultInfo.Content, JProperty.FromObject(servers));
            }
            else
            {
                ret.Add(ResultInfo.Result, false);
            }
            return ret;
        }
    }  
}
