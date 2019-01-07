using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using Bayetech.Service;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    /// <summary>
    /// 获取流程的基础信息
    /// </summary>
    public class FlowController : ApiController
    {
        IFlowService service = new FlowService();
        BaseService<T_FLOW_TYPE> flowService = new BaseService<T_FLOW_TYPE>(DBFactory.oas);
        BaseService<T_FLOW_STATUS> statusService = new BaseService<T_FLOW_STATUS>(DBFactory.oas);
        BaseService<T_WorkFlow_LogMonitor> logMonitorService = new BaseService<T_WorkFlow_LogMonitor>(DBFactory.oas);
        BaseService<T_FLOW_DISPOSAL> disposalService = new BaseService<T_FLOW_DISPOSAL>(DBFactory.oas);

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
            return statusService.GetList(c => c.FLOW_ID == flowId&&c.IsDelete!=1);
        }

        /// <summary>
        /// 获取流程线相关信息
        /// </summary>
        /// <param name="flowId"></param>
        /// <returns></returns>
        public JObject GetDisposal(decimal flowId) {
            JObject ret = new JObject();
            return disposalService.GetList(c => c.FLOW_ID == flowId && c.IsDelete != 1);
        }

        /// <summary>
        /// 获取流程的相关信息，用于组合成可视化流程图
        /// </summary>
        /// <param name="flowId"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetFlowAllInfo(string wfmId,decimal flowId) {
            return service.GetDiagramFLowInfos(wfmId,flowId);
        }

        /// <summary>
        /// 获取Receivers的集合。
        /// </summary>
        /// <param name="userId">当前用户登录的Id</param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetReceivers(string userId) {
            JObject ret = new JObject();
            using (oasEntities entity = new oasEntities())
            {
                //1.根据当前登录人找到所有的权限集合。(送的时候只能送虚拟账号)
                List<dynamic> roles = entity.UP_GetUserRole(userId, "0001").ToList<dynamic>();

                //2.根据权限找到虚拟账号集合。（虚拟账号就在权限表里面，所以直接取。）
                //List<dynamic> users = GetAllUsersByRoles(roles);
                return Core.Common.PackageJObect(roles.Count > 0, roles, null);
            }
        }

        /// <summary>
        /// 根据集合权限获取集合虚拟账号
        /// </summary>
        /// <param name="roles"></param>
        /// <returns></returns>
        public List<dynamic> GetAllUsersByRoles(List<dynamic> roles) {
            List<dynamic> dy = new List<dynamic>();
            using (oasEntities entity = new oasEntities())
            {
                //找出所有的虚拟账号，跟权限对应是一对一关系。
                //List<string> roleparams = new List<string>();
                string roleparams = string.Empty;
                foreach (var item in roles)
                {
                    roleparams += "," + item.ROLESERIAL;
                }

                List<dynamic> rolserial  = entity.T_Pub_Role.Select(c => new { c.RoleSerial }).Where(c=> roleparams.Contains(c.RoleSerial)).ToList<dynamic>();

                return rolserial;
            }
        }

        /// <summary>
        /// 获取业务监控数据
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JObject GetLogmonitor(string wfmid) {
            return logMonitorService.GetList(c => c.WFM_ID == wfmid);
        }

    }
}
