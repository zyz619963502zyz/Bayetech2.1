﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Model
{
    public class QQUserModel
    {
        public int ret { get; set; }
        public string msg { get; set; }
        public int is_lost { get; set; }
        public string nickname { get; set; }
        public string gender { get; set; }
        public string province { get; set; }
        public string city { get; set; }
        public string year { get; set; }
        public string constellation { get; set; }
        //public string figureurl { get; set; }
        //public string figureurl_1 { get; set; }
        //public string figureurl_2 { get; set; }
        //public string figureurl_qq_1 { get; set; }
        //public string figureurl_qq_2 { get; set; }
        //public string figureurl_qq { get; set; }
        //public string figureurl_type { get; set; }
        public string is_yellow_vip { get; set; }
        public string vip { get; set; }
        public string yellow_vip_level { get; set; }
        public string level { get; set; }
        public string is_yellow_year_vip { get; set; }
    }
}
