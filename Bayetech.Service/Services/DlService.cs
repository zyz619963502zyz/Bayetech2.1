using Bayetech.DAL;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Services
{
    public class DlService : IDlService
    {
        public JObject GetDlInfoList(JObject json)
        {
            try
            {
                JObject ret = new JObject();
                return ret;
              
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message + "处发生了错误!");
            }
        }

        public JObject GetNewDlInfoList(JObject json)
        {
            throw new NotImplementedException();
        }
    }
}
