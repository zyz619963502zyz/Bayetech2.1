using Aop.Api;
using Aop.Api.Domain;
using Aop.Api.Request;
using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Bayetech.Web.Controllers
{
    public class PayController : Controller
    {
        // GET: Pay
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public void PayRequest(JObject json)
        {
            var commdy = new vw_MallOrderInfo();
            //using (var db = new RepositoryBase(DBFactory.Bayetech))
            //{
            //    vw_MallOrderInfo order = JsonConvert.DeserializeObject<vw_MallOrderInfo>(json.First.Path);
            //    commdy = db.FindEntity<vw_MallOrderInfo>(a => a.OrderNo == order.OrderNo);
            //}
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
            request.SetReturnUrl($"http://{GetCurrentFullHost()}/Home/Callback");
            // 设置异步通知接收地址
            request.SetNotifyUrl("");
            // 将业务model载入到request
            request.SetBizModel(model);
            var response = clent.SdkExecute(request);
            //Console.WriteLine($"订单支付发起成功，订单号：{tradeno}");
            //跳转支付宝支付
            Response.Redirect(alipay.Gatewayurl + "?" + response.Body);
        }
        public string GetCurrentFullHost()
        {
            HttpRequest request = System.Web.HttpContext.Current.Request;
            if (!request.Url.IsDefaultPort)
                return string.Format("{0}:{1}", request.Url.Host, request.Url.Port.ToString());

            return request.Url.Host;
        }
    }
}