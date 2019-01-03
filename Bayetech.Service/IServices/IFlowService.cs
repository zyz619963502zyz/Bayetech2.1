using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.IServices
{
    public interface IFlowService
    {
        /// <summary>
        /// 获取流程信息
        /// </summary>
        /// <returns></returns>
        JObject GetDiagramFLowInfos(string wfmid, decimal flowId);
    }
}
