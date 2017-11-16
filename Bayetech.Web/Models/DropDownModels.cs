using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bayetech.Web.Models
{
    public class DropDownModels
    {
        public string Title { get; set; }

        public int Type { get; set; }
        public int Child { get; set; }

        public IList List { get; set; }
    }
}