using System;

namespace FilmPortal.DataLayer.Entities
{
    public class Rating
    {
        public int RatingId { get; set; }

        public int Mark { get; set; }

        public int FilmId { get; set; }

        public int UserId { get; set; }

    }
}
