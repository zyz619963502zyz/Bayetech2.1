using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Core.Enum
{
    /// <summary>
    /// 模块
    /// </summary>
    public enum Module
    {
        [Description("首页")]
        Home = 0,
        [Description("资讯")]
        Article = 22,
        [Description("帮助中心")]
        HelpCenter = 23,
        [Description("公告")]
        Notice = 24,
    }
}
