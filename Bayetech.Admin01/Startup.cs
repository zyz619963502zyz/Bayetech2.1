using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Bayetech.Admin01.Startup))]
namespace Bayetech.Admin01
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
