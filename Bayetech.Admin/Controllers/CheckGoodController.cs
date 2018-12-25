using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Bayetech.Service;
using Bayetech.Service.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    //[ApiSecurityFilter]
    public class CheckGoodController : ApiController
    {

        GoodInfoService service = new GoodInfoService();
        ServerService serverService = new ServerService();
        CheckService checkService = new CheckService();
        OrderService orderService = new OrderService();

        BaseService<v_framework_notify> processService = new BaseService<v_framework_notify>(DBFactory.oas);


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
                //思路：开发待处理视图。
                //1.根据当前账号获取账号所有的权限(角色)。
                //2.根据当前角色找到对应的虚拟账号。
                //3.到最后取待处理的视图时候就是 Receiver in （‘虚拟账号1’，‘虚拟账号2  ’）
                v_framework_notify OrderInfo = JsonConvert.DeserializeObject<v_framework_notify>((json["Param"] ?? "").ToString());
                CurrentLogin loginContent = (CurrentLogin)HttpContext.Current.Session["CurrentLogin"];

                //获取处理人集合
                string GetReceiverApi = AppSettingsConfig.GetBaseApi + "/api/Flow/GetReceivers";
                Dictionary<string, string> parames = new Dictionary<string, string>();
                parames.Add("userId", loginContent.User_Id);
                Tuple<string, string> parameters = WebApiHelper.GetQueryString(parames);

                var result =  WebApiHelper.Get<dynamic>(GetReceiverApi, parameters.Item1, parameters.Item2, loginContent.User_Id);
                
                //拼接处理人的,in条件。（后续功能扩充，如果除了需要把公共账号相关表单带出来，还需要当前登录人带出来，就从session里面取UserID加到in的条件userStr里面。）
                string userStr = string.Empty;
                if ((bool)result["result"])
                {
                    List<dynamic> receives = JsonConvert.DeserializeObject<List<dynamic>>(result["content"].ToString());
                    foreach (var item in receives)
                    {
                        userStr += "," + item.ROLESERIAL;
                    }
                }

                JObject ret = new JObject();
                ret = processService.GetList(c => userStr.Contains(c.Receiver) && !c.IsWaster_, page);
                if ((bool)ret["result"])
                {
                    List<v_framework_notify> result_notify = JsonConvert.DeserializeObject<List<v_framework_notify>>(ret["content"].ToString());

                    foreach (var item in result_notify)
                    {
                        vw_MallGoodMainInfo good = service.FindList(c => c.GoodNo == item.GoodNo).FirstOrDefault();
                        item.GoodTitle = (good == null?"":good.GoodTitle);
                        item.GameName = (good == null ? "" : good.GameName);
                        item.GoodTypeName = (good == null ? "" : good.GoodTypeName);
                        item.GoodKeyWord = (good == null ? "" : good.GoodKeyWord);
                    }

                    //插入进去。
                    ret["content"] = JToken.FromObject(result_notify);
                }
                return ret;
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