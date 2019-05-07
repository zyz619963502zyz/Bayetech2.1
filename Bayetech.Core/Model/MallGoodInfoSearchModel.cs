using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bayetech.Core.Entity
{
    public partial class vw_MallGoodMainInfo
    {
        public DateTime? startTime { get; set; }

        public DateTime? endTime { get; set; }

        public decimal? MinPrice { get; set; }

        public decimal? MaxPrice { get; set; }

        public int? MaxQQLevel { get; set; }

        public int? MinQQLevel { get; set; }

        public string ProfessionCode { get; set; }

    }
}