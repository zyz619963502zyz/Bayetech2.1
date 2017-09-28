using Bayetech.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public class Demo : IDemo
    {

        public int Age{ get; set; }

        public string Name{ get; set; }

        public void Print()
        {
            throw new NotImplementedException();
        }
    }
}
