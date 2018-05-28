using Bayetech.Core;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Client.Entity
{
    public class HttpResponseMsg
    {
        public int StatusCode { get; set; }
        public object Data { get; set; }
        public string Info { get; set; }
    }

    public class ProductResultMsg:HttpResponseMsg
    {
        public string Result
        {
            get
            {
                if (StatusCode == (int)StatusCodeEnum.Success)
                {
                    return JsonConvert.DeserializeObject<string>(Data.ToString());
                }

                return null;
            }
        }
    }

    public class TokenResultMsg : HttpResponseMsg
    {
        public Token Result
        {
            get
            {
                if (StatusCode == (int)StatusCodeEnum.Success)
                {
                    return JsonConvert.DeserializeObject<Token>(Data.ToString());
                }

                return null;
            }
        }
    }
}
