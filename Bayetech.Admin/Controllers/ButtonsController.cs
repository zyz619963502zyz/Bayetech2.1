using Bayetech.Core;
using Bayetech.Service;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class ButtonsController : BaseController
    {
        IButtonsManageService buttonsService = ctx.GetObject("ButtonsManageService") as IButtonsManageService;
        /// <summary>
        /// 获取按钮列表
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JObject GetList(JObject json)
        {
            return buttonsService.GetListButtons(json,null,null);
        }
        /// <summary>      
        /// 添加和修改按钮           
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject AddRoles(JObject json)
        {
            return buttonsService.AddButtons(json);
        }
        /// <summary>
        /// 删除按钮
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject DeleteRoles(JObject json)
        {
            return buttonsService.DeleteButtons(json);
        }
    }
}
