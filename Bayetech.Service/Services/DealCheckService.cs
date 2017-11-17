using System;
using Bayetech.DAL.Entity;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using System.Linq.Expressions;

namespace Bayetech.Service.Services
{
    public partial class DealCheckService : IDealCheckService
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

        public int Delete(object keyValue)
        {
            throw new NotImplementedException();
        }

        public vw_OrderInfo FindEntity(object keyValue)
        {
            throw new NotImplementedException();
        }

        public IQueryable<vw_OrderInfo> FindList(Expression<Func<vw_OrderInfo, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public int Insert(JObject json)
        {
            throw new NotImplementedException();
        }

        public int Update(JObject json)
        {
            throw new NotImplementedException();
        }
    }
}
