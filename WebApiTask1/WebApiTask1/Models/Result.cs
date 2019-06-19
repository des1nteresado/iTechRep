using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiTask1.Models
{
    public class SumRequest
    {
        public int? a { get; set; }

        public int? b { get; set; }

        public int? Sum => a + b;
    }
}
