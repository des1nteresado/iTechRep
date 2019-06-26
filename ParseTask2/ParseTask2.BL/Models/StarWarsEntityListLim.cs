using System.Collections.Generic;
using static System.String;

namespace ParseTask2.BL.Models
{
    public class StarWarsEntityListLim<T>
    {
        public StarWarsEntityListLim()
        {
            Results = new List<T>();
        }

        public List<T> Results { get; set; }
        public string Next { get; set; }

        public bool IsNext => !IsNullOrEmpty(Next);
    }
}
