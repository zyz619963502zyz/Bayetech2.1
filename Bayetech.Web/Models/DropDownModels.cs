using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bayetech.Web.Models
{
    public class DropDownModels
    {
        public string title { get; set; }

        public string type { get; set; }
        public string child { get; set; }

        public IList list { get; set; }
    }
}