using Bayetech.Core.Entity;
using Bayetech.DAL;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    /// <summary>
    /// 获取流程的基础信息
    /// </summary>
    public class FlowController : ApiController
    {

        BaseService<T_FLOW_TYPE> flowService = new BaseService<T_FLOW_TYPE>(DBFactory.oas);//快速读取
        BaseService<T_FLOW_STATUS> statusService = new BaseService<T_FLOW_STATUS>();//快速读取

        /// <summary>
        /// 获取所有的流程信息
        /// </summary>
        /// <returns></returns>
        public JObject GetFlows() {
            JObject ret = new JObject();
            return flowService.GetList(c => c.FLOW_ID > 0);
        }

        /// <summary>
        /// 根据流程ID获得对应的权限ID
        /// </summary>
        /// <param name="flowId"></param>
        /// <returns></returns>
        public JObject GetStatus(decimal flowId) {
            JObject ret = new JObject();
            return statusService.GetList(c => c.FLOW_ID == flowId);
        }
    }
}
