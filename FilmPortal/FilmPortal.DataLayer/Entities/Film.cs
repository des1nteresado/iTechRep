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

        public List<Rating> Marks { get; set; }

        public List<Comment> Comments { get; set; }

    }
}
