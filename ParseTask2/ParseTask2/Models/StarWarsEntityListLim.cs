using System.Collections.Generic;
using System.Linq;

namespace ParseTask2.Models
{
    public class StarWarsEntityListLim<T>
    {
        //public int? count => results.Count();
        public int? count { get; set; }
        public List<T> results { get; set; }
    }
}
