using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
     public interface ILoginSignService
    {
        int CreatAccount(JObject json);

        int CheckAccount(string account);
    }
}
