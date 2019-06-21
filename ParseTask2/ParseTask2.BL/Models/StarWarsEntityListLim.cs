using System.Collections.Generic;
using System.Linq;

namespace ParseTask2.BL.Models
{
    public class StarWarsEntityListLim<T>
    {
        public int? Count => Results.Count();
        public List<T> Results { get; set; }
    }
}
