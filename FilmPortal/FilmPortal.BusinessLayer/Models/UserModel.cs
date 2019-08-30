using System.Collections.Generic;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Entities
{
    public class UserModel
    {
        public int UserId { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public bool isAdmin { get; set; }

        public List<Rating> Marks { get; set; }

        public List<Comment> Comments { get; set; }
    }
}
