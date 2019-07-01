using System.Collections.Generic;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Models
{
    public class FilmLiteModel
    {
        public int FilmId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Year { get; set; }

        public string Producer { get; set; }

        public decimal AverageMark { get; set; }

        public int MarkCount { get; set; }

        public int CommentCount { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public ICollection<Genre> Genres { get; set; }

    }
}
