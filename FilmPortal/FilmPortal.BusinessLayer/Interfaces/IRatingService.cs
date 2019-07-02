using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IRatingService
    {
        bool AddRating(AddRatingRequest rating);

        bool DeleteRating(int ratingId);

        bool UpdateRating(Rating rating);
    }
}
