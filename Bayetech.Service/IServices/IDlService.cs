using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace Bayetech.Service.IServices
{
    public interface IDlService
    {
        JObject GetNewDlInfoList(JObject json);

        JObject GetDlInfoList();

    }
}
