using System.Configuration;
using System.Runtime.CompilerServices;

namespace Bayetech.Admin
{
    public class AppSettingsConfig
    {
        public static string GetTokenApi
        {
            get
            {
                return AppSettingValue();
            }
        }

        public static string StaffId
        {
            get
            {
                return AppSettingValue();
            }
        }

        private static string AppSettingValue([CallerMemberName] string key = null)
        {
            return ConfigurationManager.AppSettings[key];
        }
    }
}
