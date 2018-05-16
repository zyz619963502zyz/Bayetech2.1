using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class CheckGoodController : ApiController
    {

        GoodInfoService service = new GoodInfoService();
        ServerService serverService = new ServerService();
        CheckService checkService = new CheckService();
        OrderService orderService = new OrderService();

        /// <summary>
        /// 获取列待处理列表页数据
        /// </summary>
        /// <param name="json"></param>
        [HttpPost]
        public JObject GetProcessList(JObject json)
        {
            json = json ?? new JObject();
            Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("GoodNo") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
            if (json["Param"]["SelectType"].ToString() == "good")
            {
                vw_MallGoodMainInfo goodInfo = JsonConvert.DeserializeObject<vw_MallGoodMainInfo>((json["Param"] ?? "").ToString());
                return service.GetGoodList(goodInfo, null, null, page);//获取商品信息
            }
            else if (json["Param"]["SelectType"].ToString() == "order")
            {
                vw_MallOrderInfo OrderInfo = JsonConvert.DeserializeObject<vw_MallOrderInfo>((json["Param"] ?? "").ToString());
                return orderService.GetOrderInfo(OrderInfo, null, null, page);//获取商品订单信息
            }
            else
            {
                return null;
            }
           
        }

        /// <summary>
        /// 获取列已处理列表页数据
        /// </summary>
        /// <param name="json"></param>
        [HttpPost]
        public JObject GetProcessedList(JObject json)
        {
            json = json ?? new JObject();
            vw_MallGoodMainInfo goodInfo = JsonConvert.DeserializeObject<vw_MallGoodMainInfo>((json["Param"] ?? "").ToString());

            var acrossId = json["Param"].Value<int>("AcrossId");
            if (acrossId > 0)
            {
                goodInfo.ServerName = "Across:";
                var serverList = serverService.GetDNFServerByAcross(acrossId).ToList();
                foreach (var item in serverList)
                {
                    goodInfo.ServerName += item.Id + ",";
                }
            }

            DateTime? startTime = null;
            if (json["startTime"] != null)
            {
                startTime = Convert.ToDateTime(json["startTime"].ToString());
            }

            DateTime? endTime = null;
            if (json["endTime"] != null)
            {
                endTime = Convert.ToDateTime(json["endTime"].ToString());
            }

            Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("GoodNo") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
            return service.GetGoodList(goodInfo, startTime, endTime, page);
        }


        /// <summary>
        /// 获取列24小时未处理列表页数据
        /// </summary>
        /// <param name="json"></param>
        [HttpPost]
        public JObject Get24ProcessList(JObject json)
        {
            json = json ?? new JObject();
            vw_MallGoodMainInfo goodInfo = JsonConvert.DeserializeObject<vw_MallGoodMainInfo>((json["Param"] ?? "").ToString());

            var acrossId = json["Param"].Value<int>("AcrossId");
            if (acrossId > 0)
            {
                goodInfo.ServerName = "Across:";
                var serverList = serverService.GetDNFServerByAcross(acrossId).ToList();
                foreach (var item in serverList)
                {
                    goodInfo.ServerName += item.Id + ",";
                }
            }

            DateTime? startTime = null;
            if (json["startTime"] != null)
            {
                startTime = Convert.ToDateTime(json["startTime"].ToString());
            }

            DateTime? endTime = null;
            if (json["endTime"] != null)
            {
                endTime = Convert.ToDateTime(json["endTime"].ToString());
            }

            Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("GoodNo") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
            return service.GetGoodList(goodInfo, startTime, endTime, page);
        }


        /// <summary>
        /// 获取列待处理列表页数据
        /// </summary>
        /// <param name="json"></param>
        [HttpPost]
        public JObject CheckGoodInfo(JObject json)
        {
            if (json!=null)
            {
                Pagination page = json["Pagination"] == null ? Pagination.GetDefaultPagination("GoodNo") : JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
                MallGoodInfo goodInfo = JsonConvert.DeserializeObject<MallGoodInfo>((json["Param"] ?? "").ToString());
                return checkService.CheckGoodInfo(goodInfo);
            }
            return null;
        }
    }
}