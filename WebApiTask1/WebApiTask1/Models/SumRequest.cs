using System.ComponentModel.DataAnnotations;

namespace WebApiTask1.Models
{
    public class SumRequest
    {
        [Range(0, int.MaxValue)]
        public int? A { get; set; }

        [Range(int.MinValue, -1)]
        public int? B { get; set; }

        public int? Sum => A + B;
    }
}
