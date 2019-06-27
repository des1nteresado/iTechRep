using System.Collections.Generic;

namespace FilmPortal.DataLayer.Entities
{
    public class User
    {
        public int UserId { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public bool isAdmin { get; set; }

        public virtual ICollection<Rating> Marks { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }
}
