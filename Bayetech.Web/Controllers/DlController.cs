using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.IServices;
using Bayetech.Web.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class DlController : ApiController
    {
        IDlService Dlian = new DlService();

        /// <summary>
        /// 获取最新的列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject GetNewDlInfoList(JObject json)
        {
            JObject ret = new JObject();
            Random ran = new Random();
            Pagination page = new Pagination();
            page.order = "CreatTime";
            page.sord = "desc";
            page.rows = 5;
            //page.page = ran.Next(1, 20);//以后改20页随机，现在定位第一页
            page.page = 1;
            page.records = 1000;
            ret = Dlian.GetNewDlInfoList(page);
            return ret;
        }

        /// <summary>
        /// 获取代练信息列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject GetDlInfoList(JObject json)
        {
            JObject ret = new JObject();
            vw_MallDLInfo dlInfo = json["param"]==null?new vw_MallDLInfo():JsonConvert.DeserializeObject<vw_MallDLInfo>(json["param"].ToString());
            Pagination page = JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
            ret = Dlian.GetDlInfoList(dlInfo,page);
            return ret;
        }

        /// <summary>
        /// 获取代练明细列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetDlDetailInfo(string DlNo)
        {
            JObject ret = new JObject();
            vw_MallDLInfo dlInfo = new vw_MallDLInfo();
            dlInfo.DlNo = DlNo;
            Pagination page = Pagination.GetDefaultPagination("DlNo");
            ret.Add("main",JProperty.FromObject(Dlian.GetDlInfoList(dlInfo, page))) ;
            ret.Add("detail", JProperty.FromObject(Dlian.GetDlDetaiInfo(DlNo)));
            return ret;
        }

        /// <summary>
        /// 代练付款
        /// </summary>
        /// <param name="payModel"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject PayForDlInfo(DlPayInfoModels payModel )
        {
            JObject ret = new JObject();
            return ret;
        }
    }
}
