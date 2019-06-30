using System;
using System.Collections.Generic;
using System.Text;

namespace FilmPortal.BusinessLayer.Models
{
    public class AddRatingRequest
    {
        public int Mark { get; set; }

        public int FilmId { get; set; }

        public int UserId { get; set; }
    }
}
