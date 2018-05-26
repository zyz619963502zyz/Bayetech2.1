using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Core.Model
{
    public class CurrentLogin
    {
        public long LoginId { get; set; }
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public Nullable<byte> Admin { get; set; }
        public string LoginIp { get; set; }
        public Nullable<System.DateTime> LoginTime { get; set; }
        public string Message { get; set; }
        public string Agent { get; set; }
    }
}
