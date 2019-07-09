using System.Collections.Generic;

namespace FilmPortal.DataLayer.Entities
{
    public class Film
    {
        public int FilmId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Year { get; set; }

        public string Producer { get; set; }

        public virtual ICollection<Rating> Marks { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<Genre> Genres { get; set; }

        public virtual ICollection<Image> Images { get; set; }

    }
}
