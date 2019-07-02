using System.ComponentModel.DataAnnotations;

namespace FilmPortal.BusinessLayer.Models
{
    public class AddCommentRequest
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public int FilmId { get; set; }

        public string Comment { get; set; }
    }
}
