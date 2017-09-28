using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Interface
{
     public interface IDemo
    {
        string Name { get; set; }

        int Age { get; set; }

        void Print();
    }
}
