using Bayetech.Core.Entity;
using System;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Bayetech.Core;
using Bayetech.Service.IServices;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;
using Aop.Api;
using Aop.Api.Domain;
using Aop.Api.Request;
using Aop.Api.Response;
using Aop.Api.Util;
using System.Web;
using Bayetech.Service.Model;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net;

namespace Bayetech.Service
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
                    ret.Add(ResultInfo.Content, JToken.FromObject((count > 0 ? order.OrderNo : Properties.Resources.Error_NoOrderNo)));
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
        /// <summary>
        /// 获取订单信息
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        public JObject GetOrderInfo(vw_MallOrderInfo order, DateTime? startTime, DateTime? endTime, Pagination page = null)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                List<object> ResultGames = new List<object>();
                PaginationResult<List<vw_MallOrderInfo>> ResultPage = new PaginationResult<List<vw_MallOrderInfo>>();
                Expression<Func<vw_MallOrderInfo, bool>> expressions = PredicateExtensions.True<vw_MallOrderInfo>();
                if (order != null)
                {
                    if (!string.IsNullOrEmpty(order.OrderNo))
                    {
                        string _order = order.OrderNo.Trim();
                        expressions = expressions.And(t => t.OrderNo.Contains(_order));
                    }
                    if (order.GameId != null && order.GameId >= 0)
                    {
                        expressions = expressions.And(t => t.GameId == order.GameId);
                    }
                    if (order.GoodTypeId != null && order.GoodTypeId >= 0)
                    {
                        expressions = expressions.And(t => t.GoodTypeId == order.GoodTypeId);
                    }
                    if (order.GameGroupId != null && order.GameGroupId >= 0)
                    {
                        expressions = expressions.And(t => t.GameGroupId == order.GameGroupId);
                    }
                    if (order.GameServerId != null && order.GameServerId >= 0)
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
                    if (order.OrderStatus != null && !string.IsNullOrEmpty(order.OrderStatus))
                    {
                        expressions = expressions.And(t => t.OrderStatus == order.OrderStatus);
                    }
                    ResultPage.datas = db.FindList(page == null ? Pagination.GetDefaultPagination("OrderNo") : page, out page, expressions).ToList();
                }
                else
                {
                    ResultPage.datas = db.FindList<vw_MallOrderInfo>(page == null ? Pagination.GetDefaultPagination("OrderNo") : page).ToList();
                }
                var Games = ResultPage.datas.Select(c => new { GameId = c.GameId, GameName = c.GameName })
                    .GroupBy(q => new { q.GameId, q.GameName });
                foreach (var item in Games)
                {
                    ResultGames.Add(item.FirstOrDefault());
                }

                //计算分页
                if (page != null)
                {
                    ResultPage.pagination = page;
                }

                ret.Add(ResultInfo.Result, true);
                ret.Add(ResultInfo.Content, JToken.FromObject(ResultPage));
                ret.Add("Games", JToken.FromObject(ResultGames));

                return ret;
            }
        }
        public JObject PayOrder(JObject json)
        {
            JObject ret = new JObject();
            var commdy = new vw_MallOrderInfo();
            using (var db = new RepositoryBase(DBFactory.Bayetech))
            {
                vw_MallOrderInfo order = JsonConvert.DeserializeObject<vw_MallOrderInfo>(json.First.Path);
                commdy = db.FindEntity<vw_MallOrderInfo>(a=>a.OrderNo== order.OrderNo);
            }
            AlipayTradePagePayModel model = new AlipayTradePagePayModel
            {
                Body = "eshi",
                Subject = commdy.GameName,
                TotalAmount = commdy.OrderPrice.ToString(),
                OutTradeNo = commdy.OrderNo,
                ProductCode = "FAST_INSTANT_TRADE_PAY"
            };
            AliPayConfig alipay = new AliPayConfig();
            DefaultAopClient clent = new DefaultAopClient(alipay.Gatewayurl, alipay.AppId, alipay.PrivateKey, "json", "1.0", alipay.SignType, alipay.AlipayPublicKey, alipay.CharSet, false);
            AlipayTradePagePayRequest request = new AlipayTradePagePayRequest();
            // 设置同步回调地址
            request.SetReturnUrl($"http://{Common.GetCurrentFullHost()}/Home/Callback");
            // 设置异步通知接收地址
            request.SetNotifyUrl("");
            // 将业务model载入到request
            request.SetBizModel(model);
            var response = clent.SdkExecute(request);
            //Console.WriteLine($"订单支付发起成功，订单号：{tradeno}");
            //跳转支付宝支付
            //HttpContext.Current.Response.Redirect(alipay.Gatewayurl + "?" + response.Body);
            //HttpResponseMessage resp = new HttpResponseMessage(HttpStatusCode.Moved);
            //resp.Headers.Location = new Uri(alipay.Gatewayurl + "?" + response.Body);
            string resp = alipay.Gatewayurl + "?" + response.Body;
            ret.Add(ResultInfo.Result, true);
            ret.Add(ResultInfo.Content, JToken.FromObject(resp));
            return ret;
        }
    }

    //public HttpResponseMessage Post()
    //{
    //    // ... do the job
    //    // now redirect

    //    HttpResponseMessage resp = new HttpResponseMessage(HttpStatusCode.Moved);
    //    resp.Headers.Location = new Uri("http://www.***c.com");
    //    return resp;
    //}
}
