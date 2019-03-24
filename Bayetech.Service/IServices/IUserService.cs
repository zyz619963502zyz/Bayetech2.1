using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
    public partial interface IUserService : IBaseService<User>
    {
        bool CreatAccount(JObject json);

        bool CheckAccount(string account);

        JObject CheckLogin(JObject json);

        JObject QQUserLogion(JObject json);
    }
}
