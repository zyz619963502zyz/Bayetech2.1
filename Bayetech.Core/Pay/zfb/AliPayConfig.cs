using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Core
{
    public class AliPayConfig
    {
        public AliPayConfig()
        {
            #region 沙箱环境
            //支付宝公匙
            AlipayPublicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA46izEJrRHhim15w7VyhB5kHtob94i/SvNGjzE4gdW4Klc0j9OtwrKXwPJvTXyAhD5CkQpIQv5aIm1l3lWgEzkSxsBaXTJj5OVFvEeFDrpMnCsuZspBCWhLFYqhrvy5l9lxnk3exzNPV+bYwuVHmWbrUH1L2gsgTuZkwGf/qGwodk5hFTgayG+C3U7J4CX/bzzxuXUF0iaLUWxNDD9pbgF0K39zpcQrhIeRpwDTK+aJjPFw1EpVey2/zw6ZvoS0nNcpdCU/73URM2dsXIFGc3Y27dQlMi9FNnUqWRHpTnH8BA0VU0BjHu1zlRn3TnAIdnqXseDytLclgFeor5C7cY2QIDAQAB";
            //应用id
            AppId = "2016092200567325";
            //密匙编码
            CharSet = "UTF-8";
            //支付网关
            Gatewayurl = "https://openapi.alipaydev.com/gateway.do";
            //商家私匙
            PrivateKey = "MIIEpgIBAAKCAQEAmBJRzkBYcukvmXQsh/CKHOl9plg06o6X+06/3Lfq5S5QLm9dJ3w4/4VEPuPSTSjt7Msb1TF7vAf3vV8xqv7lWTU4h0Vrl4GXX7H1s0csqNV56jL48h3b2mO6dWSDN2FJmpMB2ULkNMZltBYWmdc8HsTQV6xeqMUydZhbaSDR7mMsUSNGictN5bUchvqRIhyGgNijlJ6gZD5QxXQPojBoKU9nmbgKQ+mU3kChURLhsgOv1CLf10i6mq0XD2Z+cLKddHzE3m0B4fgjd+IY8fz7VxitSCYB/E3hy3NneBEbW0l/r5QefEcOicRmMR+Mktzrd6rQn81A5PeUOlLe4K9hBwIDAQABAoIBAQCBh2kisvAjwLeIj8m2aI5bng4meA9qktaleig2SnnLiC1HwBeqoEa0bsD4iHkCvBAcl8w3RZTNTkQYi1L1AXQ9DfX+UoUYYYucOSq876z8igj0EUK2h/RSCowxndGehEF7Zig29KEIysyqHf5WP1y4IJANfYaLXpxiScniu8/UqlhWjVHZLlQcDZ24tnAG7nnl7PF6KsZv5TTqfcpC/c8DnpY9qY1CtgDLBg+4eDVQe0y1HpFXtuRkf528k2mnQmEkTkskndYyaiD18QxXo6vXT3HqM01j1PVKSPY/txM2HnmYEp2JQVI5eKZFgEXxgR5wyGsZOfRp7dCjWJ8z7wLxAoGBAMgqLgeuoGDZLtpJrZsDGPHGQI9iq0KZXJOgySpfCE2iTiEdZJ+R9U2i84OMMWFVsMw03n3FaQyEdyt4NIsvrNDfcHJqvM85SxmsqIIBVPtTf+ha1bCNUALuJAveghH5Z1i8d31Ia702Lmuexkew8xBJE7iz6O69wAIIFydMG8ZVAoGBAMJ9yn4yG72JQYGiiAjx7A0LpKy/gqO8NU0i0hyTPLaOGMZQmDrqu3pvLJkcoTvvLI3J3YH4AfI4IPFb4jUrj1vwByR1kr4p/ZlRMPnNUQGDhaYvHgn80R/VVEWFC0bGOgV1yy8czbMbDgOa/Hp3ZOFwELSnhy5IMHzY/jUDpg3rAoGBAMeNBYazGUB0RLlqaqD3XY7rzsEj5QjoS9sBmIudYnHDNZDd9MsAgEV+BrdGtJQNEc0DiCxq+md4SDYWCIwaY3d4ymnG76THwY8/Cl9RZJ+KhyHmLNNuji3drCIJGjNBKT7V5WoJIR/pPC4ehB5E0o2RzQ9+jOI2WY2s8yhCQA5hAoGBAIGEeWOehOCsVcY5cTPbvyFU3p33jszw2eH7TUagOm8ro431P9sEVEMNY/q2mRyrgtUNWAhkGw+tlyqD0Nktn/NOncMG1Oj0V6BQ9Dd2JfrHFip7+BoYlT8ItmzxU3gXK65VKjC+krEyVBvMi1QWzERgd4+GfLwycK/DZU3ylxNvAoGBAJLam/XVZIhXDd6RqImxD0haqJpbp9+r6MBJ/fLXef9f4mmzv31PBEbzofQ270OofpA7vb1T7SxUpqJ2rlj+ZXqnPz3MldzP07X0OOSGQv1VyrYkWhV+kQaPzdr7euaC2b+76hPQm9GATQpJFSs5MWrxly1XfnxZ4zADx21flWKO";
            //签名方式
            SignType = "RSA2";
            //商户id
            Uid = "2088102176711084";
            #endregion
            #region 正式环境
            ////支付宝公匙
            //AlipayPublicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh0YBfe7Q2JoChyzRYBOEaQcdn3/jJwKvi3XhWbQDL6/DhzrtNSOKZi8k0U0NrGE99gxTpt+vQAn8+FxQ0mFXSQw62cRBpuJc0xWkh/k4UJRXXIa+palZQ7nSfIqNWnXsGLdqbn0Tpcw36/IlwLTo+IWCnFrlSFqDDTwLP/deSwPFxSVI8n8pUy+ldicwvf76cJ5b4xkVBVFBlXdNK+fjjP1u1AF1MET0cXmvlEnZO9KJhNSej4HvORWr5DXRq1I893MNB4/WXliQl8ep1CilvTnqV/T1O40GzT1Z9/R9FjIWVUMhO+Emov9pZFp43b5weOGdqdY4u4a+ZhS1Ml3ftwIDAQAB";
            ////应用id
            //AppId = "2018102361792392";
            ////密匙编码
            //CharSet = "UTF-8";
            ////支付网关
            //Gatewayurl = "https://openapi.alipay.com/gateway.do";
            ////商家私匙
            //PrivateKey = "MIIEpgIBAAKCAQEAmBJRzkBYcukvmXQsh/CKHOl9plg06o6X+06/3Lfq5S5QLm9dJ3w4/4VEPuPSTSjt7Msb1TF7vAf3vV8xqv7lWTU4h0Vrl4GXX7H1s0csqNV56jL48h3b2mO6dWSDN2FJmpMB2ULkNMZltBYWmdc8HsTQV6xeqMUydZhbaSDR7mMsUSNGictN5bUchvqRIhyGgNijlJ6gZD5QxXQPojBoKU9nmbgKQ+mU3kChURLhsgOv1CLf10i6mq0XD2Z+cLKddHzE3m0B4fgjd+IY8fz7VxitSCYB/E3hy3NneBEbW0l/r5QefEcOicRmMR+Mktzrd6rQn81A5PeUOlLe4K9hBwIDAQABAoIBAQCBh2kisvAjwLeIj8m2aI5bng4meA9qktaleig2SnnLiC1HwBeqoEa0bsD4iHkCvBAcl8w3RZTNTkQYi1L1AXQ9DfX+UoUYYYucOSq876z8igj0EUK2h/RSCowxndGehEF7Zig29KEIysyqHf5WP1y4IJANfYaLXpxiScniu8/UqlhWjVHZLlQcDZ24tnAG7nnl7PF6KsZv5TTqfcpC/c8DnpY9qY1CtgDLBg+4eDVQe0y1HpFXtuRkf528k2mnQmEkTkskndYyaiD18QxXo6vXT3HqM01j1PVKSPY/txM2HnmYEp2JQVI5eKZFgEXxgR5wyGsZOfRp7dCjWJ8z7wLxAoGBAMgqLgeuoGDZLtpJrZsDGPHGQI9iq0KZXJOgySpfCE2iTiEdZJ+R9U2i84OMMWFVsMw03n3FaQyEdyt4NIsvrNDfcHJqvM85SxmsqIIBVPtTf+ha1bCNUALuJAveghH5Z1i8d31Ia702Lmuexkew8xBJE7iz6O69wAIIFydMG8ZVAoGBAMJ9yn4yG72JQYGiiAjx7A0LpKy/gqO8NU0i0hyTPLaOGMZQmDrqu3pvLJkcoTvvLI3J3YH4AfI4IPFb4jUrj1vwByR1kr4p/ZlRMPnNUQGDhaYvHgn80R/VVEWFC0bGOgV1yy8czbMbDgOa/Hp3ZOFwELSnhy5IMHzY/jUDpg3rAoGBAMeNBYazGUB0RLlqaqD3XY7rzsEj5QjoS9sBmIudYnHDNZDd9MsAgEV+BrdGtJQNEc0DiCxq+md4SDYWCIwaY3d4ymnG76THwY8/Cl9RZJ+KhyHmLNNuji3drCIJGjNBKT7V5WoJIR/pPC4ehB5E0o2RzQ9+jOI2WY2s8yhCQA5hAoGBAIGEeWOehOCsVcY5cTPbvyFU3p33jszw2eH7TUagOm8ro431P9sEVEMNY/q2mRyrgtUNWAhkGw+tlyqD0Nktn/NOncMG1Oj0V6BQ9Dd2JfrHFip7+BoYlT8ItmzxU3gXK65VKjC+krEyVBvMi1QWzERgd4+GfLwycK/DZU3ylxNvAoGBAJLam/XVZIhXDd6RqImxD0haqJpbp9+r6MBJ/fLXef9f4mmzv31PBEbzofQ270OofpA7vb1T7SxUpqJ2rlj+ZXqnPz3MldzP07X0OOSGQv1VyrYkWhV+kQaPzdr7euaC2b+76hPQm9GATQpJFSs5MWrxly1XfnxZ4zADx21flWKO";
            ////签名方式
            //SignType = "RSA2";
            ////商户id
            //Uid = "2088331104724654";
            #endregion
        }

        public string AppId { get; set; }
        public string Uid { get; set; }
        public string Gatewayurl { get; set; }
        public string PrivateKey { get; set; }
        public string AlipayPublicKey { get; set; }
        public string SignType { get; set; }
        public string CharSet { get; set; }
        public bool IsKeyFromFile { get; set; }
    }
}
