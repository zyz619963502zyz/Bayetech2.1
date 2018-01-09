using Bayetech.Core;
using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace Bayetech.Service
{
    public interface IDlService
    {
        JObject GetNewDlInfoList(Pagination page);

        JObject GetDlInfoList(vw_MallDLInfo mallDlInfo,Pagination page);

    }
}
