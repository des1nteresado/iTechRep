﻿namespace FilmPortal.BusinessLayer.Models
{
    public class AddCommentRequest
    {
        public int UserId { get; set; }

        public int PostId { get; set; }

        public string Comment { get; set; }

    }
}
