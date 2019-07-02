using System.Collections.Generic;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Models
{
    public class AddFilmRequest
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public int Year { get; set; }

        public string Producer { get; set; }

        public List<Genre> Genres { get; set; }
    }
}
