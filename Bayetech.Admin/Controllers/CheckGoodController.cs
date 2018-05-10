using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.Service.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class CheckGoodController : ApiController
    {

        GoodInfoService service = new GoodInfoService();
        ServerService serverService = new ServerService();

        /// <summary>
        /// 获取列待处理列表页数据
        /// </summary>
        /// <param name="json"></param>
        [HttpPost]
        public JObject GetProcessList(JObject json)
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
    }
}
