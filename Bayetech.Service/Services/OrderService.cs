using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.Core;

namespace Bayetech.Service.Services
{
    public class OrderService : BaseService<MallOrder>, IOrderService
    {
        /// <summary>
        /// 生成订单
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        public JObject CreatOrder(MallOrder order)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
                JObject ret = new JObject();
                if (!string.IsNullOrEmpty(order.GoodNo))
                {
                    order.OrderNo = Common.CreatOrderNo(order.OrderNo);
                    db.Insert(order);
                    int count = db.Commit();
                    ret.Add(ResultInfo.Result, (count > 0 ? true : false));
                    ret.Add(ResultInfo.Result, (count > 0 ? "" : "订单编号生成失败，请稍后再试。"));
                }
                else
                {
                    ret.Add(ResultInfo.Result, "订单编号生成失败,无此商品编号。");
                }
                return ret;
            }
        }
    }
}
