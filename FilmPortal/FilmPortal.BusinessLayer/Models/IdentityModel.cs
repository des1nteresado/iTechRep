using System.ComponentModel.DataAnnotations;

namespace FilmPortal.BusinessLayer.Models
{
    public class IdentityModel
    {
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Minimum 3 characters required.")]
        public string Username { get; set; }

        [StringLength(30, MinimumLength = 4, ErrorMessage = "Minimum 4 characters required.")]
        public string Password { get; set; }
    }
}
