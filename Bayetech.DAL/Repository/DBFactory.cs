using Bayetech.Core.Entity;
using System.Data.Entity;

namespace Bayetech.DAL
{
    /// <summary>
    /// 数据库仓储类
    /// </summary>
    public class DBFactory
    {
        private static DbContext _Bayetech = null;
        private static DbContext _oas = null;
        private static object lockObject = new object();
        
        public static DbContext Bayetech
        {
            get {
                lock(lockObject) {
                    if (_Bayetech!=null)
                    {
                        return _Bayetech;
                    }
                    else
                    {
                        return new BayetechEntities();
                    }
                }
            }
        }

        public static DbContext oas
        {
            get
            {
                lock (lockObject)
                {
                    if (_oas != null)
                    {
                        return _oas;
                    }
                    else
                    {
                        return new oasEntities();
                    }
                }
            }
        }

    }
}
