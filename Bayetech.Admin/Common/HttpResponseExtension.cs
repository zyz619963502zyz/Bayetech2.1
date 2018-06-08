using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
namespace Bayetech.Admin
{
    public class HttpResponseExtension
    {
        public static HttpResponseMessage toJson(object obj)
        {
            string str = "";
            if (obj is string || obj is char)
            {
                str = obj.ToString();
            }
            else
            {
                str = JsonConvert.SerializeObject(str);
            }
            HttpResponseMessage result = new HttpResponseMessage { Content = new StringContent(str, Encoding.GetEncoding("UTF-8"), "application/json") };
            return result;
        }
    }
}