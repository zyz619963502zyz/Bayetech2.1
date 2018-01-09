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
                    ret.Add(ResultInfo.Content, JProperty.FromObject((count > 0 ? "" : Properties.Resources.Error_NoOrderNo)));
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
        public JObject GetOrderInfo(vw_MallOrderInfo order,DateTime startTime,DateTime endTime,Pagination page=null)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                List<object> ResultGames = new List<object>();
                PaginationResult<List<vw_MallOrderInfo>> ResultPage = new PaginationResult<List<vw_MallOrderInfo>>();
                Expression<Func<vw_MallOrderInfo, bool>> expressions = PredicateExtensions.True<vw_MallOrderInfo>();
                if (order != null)
                {
                    if (order.GameId != null&&order.GameId >= 0)
                    {
                        expressions = expressions.And(t => t.GameId == order.GameId);
                    }
                    if (order.GoodTypeId!=null&&order.GoodTypeId>=0)
                    {
                        expressions = expressions.And(t => t.GoodTypeId == order.GoodTypeId);
                    }
                    if (order.GameGroupId != null&&order.GameGroupId>=0)
                    {
                        expressions = expressions.And(t => t.GameGroupId == order.GameGroupId);
                    }
                     if (order.GameServerId != null&&order.GameServerId>=0)
                    {
                        expressions = expressions.And(t => t.GameServerId == order.GameServerId);
                    }
                    if (startTime != null && !string.IsNullOrEmpty(startTime.ToString()))//订单开始时间
                    {
                        expressions = expressions.And(t => t.OrderCreatTime >= startTime);
                    }
                    if (endTime != null && !string.IsNullOrEmpty(endTime.ToString()))//订单结束时间
                    {
                        expressions = expressions.And(t => t.OrderCreatTime <= endTime);
                    }
                    if (!string.IsNullOrEmpty(order.OrderNo))
                    {
                        expressions = expressions.And(t => t.OrderNo == order.OrderNo);
                    }
                    if (order.OrderStatus!=null&& order.OrderStatus>0)
                    {
                        expressions = expressions.And(t => t.OrderStatus == order.OrderStatus);
                    }
                    ResultPage.datas = db.FindList(page == null? Pagination.GetDefaultPagination("OrderNo"):page,out page,expressions).ToList();
                }
                else
                {
                    ResultPage.datas = db.FindList<vw_MallOrderInfo>(page == null ? Pagination.GetDefaultPagination("OrderNo") : page).ToList();
                }

                ////查询结果封装
                //if (ResultPage.datas.Count > 0)
                //{
                    var Games = ResultPage.datas.Select(c => new { GameId = c.GameId, GameName = c.GameName })
                        .GroupBy(q => new { q.GameId, q.GameName });
                    foreach (var item in Games)
                    {
                        ResultGames.Add(item.FirstOrDefault());
                    }

                    //计算分页
                    if (page!=null)
                    {
                        ResultPage.pagination = page;
                    }

                    ret.Add(ResultInfo.Result, true);
                    ret.Add(ResultInfo.Content, JProperty.FromObject(ResultPage));
                    ret.Add("Games", JProperty.FromObject(ResultGames));
                //}
                //else
                //{
                //    ret.Add(ResultInfo.Result, true);
                //    ret.Add(ResultInfo.Content, Properties.Resources.Reminder_NoInfo);
                //}
                return ret;
            }
        }
    }
}
