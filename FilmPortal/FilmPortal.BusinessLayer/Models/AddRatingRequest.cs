using System.ComponentModel.DataAnnotations;

namespace FilmPortal.BusinessLayer.Models
{
    public class AddRatingRequest
    {
        [Range(1, 10, ErrorMessage = "Mark must be beetween 1 and 10.")]
        public int Mark { get; set; }

        [Required]
        public int FilmId { get; set; }

        [Required]
        public int UserId { get; set; }
    }
}
