using Bayetech.Core.Entity;
using System;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Bayetech.Core;
using Bayetech.Service.IServices;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

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
                    order.OrderNo = Common.CreatOrderNo(order.GoodNo);
                    order.OrderCreatTime = DateTime.Now;
                    db.Insert(order);
                    int count = db.Commit();
                    ret.Add(ResultInfo.Result, (count > 0 ? true : false));
                    ret.Add(ResultInfo.Content,JProperty.FromObject((count > 0 ? "" :Properties.Resources.Error_NoOrderNo)));
                }
                else
                {
                    ret.Add(ResultInfo.Result, Properties.Resources.Error_NoGoodNo);
                }
                return ret;
            }
        }

        /// <summary>
        /// 获取订单信息
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        public JObject GetOrderInfo(vw_MallOrderInfo order)
        {
            using (var db = new RepositoryBase().BeginTrans())
            {
                JObject ret = new JObject();
                List<vw_MallOrderInfo> orderInfos;
                Expression<Func<vw_MallOrderInfo,bool>> expressions = PredicateExtensions.True<vw_MallOrderInfo>();
                if (order!=null)
                {
                    if (order.GameId <= 0 && order.GameId != null)
                    {
                        expressions.And(t => t.GameId == order.GameId);
                    }
                    if (!string.IsNullOrEmpty(order.GoodType))
                    {
                        expressions.And(t => t.GoodType == order.GoodType);
                    }
                    if (!string.IsNullOrEmpty(order.GroupName))
                    {
                        expressions.And(t => t.GroupName == order.GroupName);
                    }
                    if (!string.IsNullOrEmpty(order.ServerName))
                    {
                        expressions.And(t => t.ServerName == order.ServerName);
                    }
                    if (order.OrderCreatTime != null && !string.IsNullOrEmpty(order.OrderCreatTime.ToString()))//订单时间
                    {
                        expressions.And(t => t.OrderCreatTime == order.OrderCreatTime);
                    }
                    if (!string.IsNullOrEmpty(order.OrderNo))
                    {
                        expressions.And(t => t.OrderNo == order.OrderNo);
                    }
                    if (!string.IsNullOrEmpty(order.GameName))
                    {
                        expressions.And(t => t.OrderStatus == order.OrderStatus);
                    }
                    orderInfos = db.FindList<vw_MallOrderInfo>(expressions, GetDefaultPagination("OrderNo")).ToList(); 
                }
                else
                {
                    orderInfos = db.FindList<vw_MallOrderInfo>(GetDefaultPagination("OrderNo")).ToList();
                }

                //查询结果封装
                if (orderInfos.Count > 0)
                {
                    ret.Add(ResultInfo.Result, true);
                    ret.Add(ResultInfo.Content, JProperty.FromObject(orderInfos));
                }
                else
                {
                    ret.Add(ResultInfo.Result, false);
                    ret.Add(ResultInfo.Content, Properties.Resources.Reminder_NoInfo);
                }
                return ret;
            }
        }
    }
}
