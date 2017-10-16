using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
     public interface ILoginSignService
    {
        bool CreatAccount(JObject json);

        bool CheckAccount(string account);
    }
}
