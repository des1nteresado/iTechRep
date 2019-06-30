using AutoMapper;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;

namespace FilmPortal.BusinessLayer.Services
{
    public class RatingService : IRatingService
    {
        private readonly IRepository<Rating> _repository;
        private readonly IMapper _mapper;

        public RatingService(IRepository<Rating> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public void AddRating(AddRatingRequest request)
        {
            var rating = _mapper.Map<AddRatingRequest, Rating>(request);
            _repository.Insert(rating);
        }

        public void DeleteRating(int ratingId)
        {
            _repository.Delete(ratingId);
        }

        public void UpdateRating(Rating rating)
        {
            _repository.Update(rating);
        }
    }
}
