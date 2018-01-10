using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.IServices;
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
            vw_MallDLInfo dlInfo = JsonConvert.DeserializeObject<vw_MallDLInfo>(json["param"].ToString());
            Pagination page = JsonConvert.DeserializeObject<Pagination>(json["Pagination"].ToString());
            ret = Dlian.GetDlInfoList(dlInfo,page);
            return ret;
        }


    }
}
