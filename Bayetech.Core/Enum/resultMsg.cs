using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Core
{
    //存放Token的对象
    public class ResultMsg
    {
        public string StatusCode { get; set; }

        public string Info { get; set; }

        public Token Data { get; set; }
    }
}
