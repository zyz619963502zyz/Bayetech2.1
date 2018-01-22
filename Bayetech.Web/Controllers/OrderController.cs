using Bayetech.Core;
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
        BaseService<MallOrderStatus> orderService = new BaseService<MallOrderStatus>();

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
        [HttpPost]
        public JObject GetOrderInfo(JObject json)
        {
            if (json!=null)
            {
                DateTime startTime = Convert.ToDateTime(json["Param"]["startTime"].ToString());//开始日期
                DateTime endTime = Convert.ToDateTime(json["Param"]["endTime"].ToString());//结束日期
                vw_MallOrderInfo order = JsonConvert.DeserializeObject<vw_MallOrderInfo>(json == null ? "" : json["Param"].ToString());
                Pagination page = JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
                return service.GetOrderInfo(order, startTime, endTime, page);
            }
            return null;
        }

        /// <summary>
        /// 获取区服列表
        /// </summary>
        /// <param name="gameId">游戏Id</param>
        /// <param name="parentId">父级ID,0的时候为服务器，其他的时候为区名称</param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetServers(int gameId,int parentId)
        {
            JObject ret = new JObject();
            List<Server> servers = serverService.FindList(c => c.ParentId == parentId&&c.GameId == gameId).ToList();
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


        /// <summary>
        /// 获得订单的默认状态
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetOrderStatus(int parentId) {
            JObject ret = new JObject();
            List<MallOrderStatus> status = orderService.FindList(c => c.ParentId == parentId).ToList();
            if (status.Count > 0)
            {
                ret.Add(ResultInfo.Result, true);
                ret.Add(ResultInfo.Content, JProperty.FromObject(status));
            }
            else
            {
                ret.Add(ResultInfo.Result, false);
            }
            return ret;
        }

    }  
}
