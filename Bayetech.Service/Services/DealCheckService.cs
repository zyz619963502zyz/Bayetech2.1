using System;
using Bayetech.DAL.Entity;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Bayetech.Service.Services
{
    public partial class vw_OrderInfoService : IDealCheckService
    {

        //获取
        public JObject GetCheckInfo(JObject json)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                vw_OrderInfo orderList = new vw_OrderInfo();
                vw_OrderInfo _orderInfo = (vw_OrderInfo)JsonConvert.DeserializeObject(json.First.Path, typeof(Account));
                if (!string.IsNullOrEmpty(_orderInfo.OrderNo))
                {
                    orderList = db.FindEntity<vw_OrderInfo>(c => c.OrderNo == _orderInfo.OrderNo);
                }
                ret.Add(ResultInfo.Result, JProperty.FromObject(true));
                ret.Add(ResultInfo.Content, JProperty.FromObject(_orderInfo));
                return ret;
            }
        }
    }
}
