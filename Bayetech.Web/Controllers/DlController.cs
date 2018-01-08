using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using System;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class DlController : ApiController
    {
        IDlService IDlian = new DlService();

        /// <summary>
        /// 获取最新的列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetNewDlInfoList(JObject json)
        {
            JObject ret = new JObject();
            Random ran = new Random();
            Pagination page = new Pagination();
            page.order = "CreatTime";
            page.sord = "desc";
            page.rows = 5;
            page.page = ran.Next(1, 20);
            page.records = 1000;
            IDlian.GetNewDlInfoList(page);
            return ret;
        }

        /// <summary>
        /// 获取代练信息列表
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject GetDlInfoList(JObject json)
        {
            JObject ret = new JObject();
            return ret;
        }
    }
}
