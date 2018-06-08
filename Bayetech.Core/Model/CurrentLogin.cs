using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Core
{
    public class CurrentLogin
    {
        public string LoginId { get; set; }
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public Nullable<byte> Admin { get; set; }
        public string LoginIp { get; set; }
        public long LoginIpInt { get; set; }
        public Nullable<System.DateTime> LoginTime { get; set; }
        public string Message { get; set; }
        public string Agent { get; set; }

        public Token token { get; set; }
    }

    //用户令牌对象
    public class Token {
        //生成的令牌信息
        public string StaffId { get; set; }
        //生成的令牌编码
        public string TokenId { get; set; }
        //Token的过期时间
        public DateTime ExpireTime { get; set; }
        //StatusCode状态码
        public StatusCodeEnum StatusCode { get; set; }

    }


    public enum StatusCodeEnum {
        Success,
        Error,
        HaveNoContent
    }
}
