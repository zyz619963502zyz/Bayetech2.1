using System.ComponentModel;

namespace Bayetech.Core.Enum
{
    /// <summary>
    /// 搜索类型
    /// </summary>
    public enum SearchType
    {
        [Description("网游")]
        OnlineGames,
        [Description("手游")]
        MobileGames,
        [Description("游戏区")]
        Group,
        [Description("服务器")]
        Server,
        [Description("交易类型")]
        MallType,
    };
}
