using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System;

namespace Bayetech.Service
{
    public interface IGoodInfoService
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="goodNo"></param>
        /// <returns></returns>
        JObject GetGoodInfo(string goodNo);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="goodNo"></param>
        /// <returns></returns>
        JObject GetGoodInfoDetail(string goodNo);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="goodInfo"></param>
        /// <param name="startTime"></param>
        /// <param name="endTime"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        JObject GetGoodList(vw_MallGoodMainInfo goodInfo, Pagination page);
    }
}
