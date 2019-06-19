using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiTask1.Models
{
    public class Result<T>
    {
        public T A { get; set; }
        public T B { get; set; }
        public T Sum { get; set; }
    }
}
