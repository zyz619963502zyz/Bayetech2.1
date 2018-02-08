using Bayetech.Core.Entity;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class SettingController : ApiController
    {
        BaseService<Settings> service = new BaseService<Settings>();
        /// <summary>
        /// 根据类型获取配置
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetListByType(string type)
        {
            var parent = service.FindList(s => s.Value == type || s.key == type).FirstOrDefault();
            var data = service.GetList(s => s.ParentId == parent.Id);
            return data;
        }

        /// <summary>
        /// 根据父级获取配置列表
        /// </summary>
        /// <param name="parentId"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetListByParentId(long parentId)
        {
            var data = service.GetList(s => s.ParentId == parentId);
            return data;
        }
    }
}
