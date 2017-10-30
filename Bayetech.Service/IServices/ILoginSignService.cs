using Newtonsoft.Json.Linq;

namespace Bayetech.Service.IServices
{
    public partial interface ILoginSignService
    {
        bool CreatAccount(JObject json);

        bool CheckAccount(string account);

        bool LoginIn(JObject json);
    }
}
