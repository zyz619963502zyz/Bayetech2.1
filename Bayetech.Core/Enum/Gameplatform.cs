using System.ComponentModel;

namespace Bayetech.Core.Enum
{
    /// <summary>
    /// 游戏平台
    /// </summary>
    public enum Gameplatform
    {
        [Description("PC")]
        PC,
        [Description("手机")]
        Mobile,
        [Description("ps4")]
        PSP,
        [Description("xbox")]
        Xbox, 
    };
}
