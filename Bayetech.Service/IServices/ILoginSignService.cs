using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
    public partial interface ILoginSignService
    {
        bool CreatAccount(JObject json);

        bool CheckAccount(string account);

        JObject CheckLogin(JObject json);
    }
}
