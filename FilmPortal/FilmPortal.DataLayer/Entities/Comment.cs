using System;

namespace FilmPortal.DataLayer.Entities
{
    public class Comment
    {
        public int CommentId { get; set; }

        public string Body { get; set; }

        public DateTime CreateDate { get; set; }

        public int FilmId { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        public Film Film { get; set; }
    }
}
