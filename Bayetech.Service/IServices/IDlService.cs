using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
    public interface IDlService
    {
        JObject GetNewDlInfoList(Pagination page);

        JObject GetDlInfoList(vw_MallDLInfo mallDlInfo,Pagination page);

        JObject GetDlDetaiInfo(string No);

        JObject SubmitDlInfo(JObject orderInfo);
    }
}
