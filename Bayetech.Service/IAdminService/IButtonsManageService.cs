using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public interface IButtonsManageService
    {
        /// <summary>
        /// 获取按钮列表
        /// </summary>
        /// <returns></returns>
        JObject GetListButtons();
        /// <summary>
        /// 添加和修改按钮
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        JObject AddButtons(JObject json);

        JObject DeleteButtons(JObject json);
    }
}
