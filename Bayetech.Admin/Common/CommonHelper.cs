using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace Bayetech.Admin
{
    public class CommonHelper
    {
        public static string ConvertToLength(string oldID, int length, char replaceStr)
        {

            if (string.IsNullOrEmpty(oldID))
            {
                return GetReplaceStr(length, replaceStr);
            }

            return GetReplaceStr((length - oldID.Length), replaceStr) + oldID;
        }

        protected static string GetReplaceStr(int length, char replaceStr)
        {
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < length; i++)
            {
                sb.Append(replaceStr);
            }

            return sb.ToString();
        }
    }
}