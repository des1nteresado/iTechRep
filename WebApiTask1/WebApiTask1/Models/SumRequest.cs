using System.ComponentModel.DataAnnotations;

namespace WebApiTask1.Models
{
    public class SumRequest
    {
        [Range(0, int.MaxValue, ErrorMessage = "Param. A must be a positive.")]
        public int? A { get; set; }

        [Range(int.MinValue, -1, ErrorMessage = "Param. B must be a negative.")]
        public int? B { get; set; }

        public int? Sum => A + B;
    }
}
