using System;

namespace Bayetech.Core.Entity
{
    /// <summary>
    /// 待处理字段补充商品信息，二级查询得道填充进来。
    /// </summary>
    public partial class v_framework_notify
    {
        public int Id { get; set; }
        public string GameName { get; set; } //游戏名称
        public string GoodTypeName { get; set; } //商品类型，账号，金币，服务
        public string GoodTitle { get; set; }
        public decimal? GoodPrice { get; set; }
        public decimal? GoodSinglePrice { get; set; }
        public string GoodKeyWord { get; set; }
        public long? GoodTypeId { get; set; }
        public long? GameId { get; set; }
        public string GoodDetailInfo { get; set; }
        public string GoodFirstPicture { get; set; }
        public string GameAccount { get; set; }
        public string GameService { get; set; }
        public int? GameGroupId { get; set; }
        public long? GameProfessionId { get; set; }
        public int? GameServerId { get; set; }
        public int? Stock { get; set; }
        public int? CancelNum { get; set; }
        public string SalerId { get; set; }
        public int? HistoryAccount { get; set; }
        public int? ListOrder { get; set; }
        public DateTime? EditTime { get; set; }
        public DateTime? AddTime { get; set; }
        public int? GoldNum { get; set; }
        public string Dealway { get; set; }
        public string TradeType { get; set; }
        public DateTime? GoodValidityTime { get; set; }
        public int? QQ { get; set; }
        public string Phone { get; set; }
        public string Status { get; set; }
        public string CheckRemark { get; set; }
    }
}