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

        public Token token { get; set; }
    }

    //用户令牌对象
    public class Token {
        //生成的令牌信息
        public string TokenId { get; set; }
        //生成的令牌编码
        public string TokenCode { get; set; }
        //TokenMess提示信息
        public string TokenMess { get; set; }
    }

}
