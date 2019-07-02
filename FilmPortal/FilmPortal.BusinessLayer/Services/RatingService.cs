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
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<Film> _filmRepository;
        private readonly IMapper _mapper;

        public RatingService(IRepository<Rating> repository, IMapper mapper, IRepository<User> userRepository, IRepository<Film> filmRepository)
        {
            _repository = repository;
            _mapper = mapper;
            _userRepository = userRepository;
            _filmRepository = filmRepository;
        }

        public bool AddRating(AddRatingRequest request)
        {
            var user = _userRepository.GetById(request.UserId);
            var film = _filmRepository.GetById(request.FilmId);

            if (user == null || film == null || request.Mark > 10 || request.Mark < 1)
            {
                return false;
            }

            var rating = _mapper.Map<AddRatingRequest, Rating>(request);
            _repository.Insert(rating);

            return true;
        }

        public bool DeleteRating(int ratingId)
        {
            var rating = _repository.GetById(ratingId);

            if (rating == null)
            {
                return false;
            }

            _repository.Delete(ratingId);

            return true;
        }

        public bool UpdateRating(Rating rating) //????
        {
            if (rating == null)
            {
                return false;
            }

            _repository.Update(rating);

            return true;
        }
    }
}
