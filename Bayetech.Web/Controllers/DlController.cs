using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
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
            IDlian.GetNewDlInfoList(json);
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
