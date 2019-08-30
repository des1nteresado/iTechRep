using System;
using System.Linq;
using AutoMapper;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Context;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;

namespace FilmPortal.BusinessLayer.Services
{
    public class RatingService : IRatingService
    {
        private readonly RepositoryContext _context;
        private readonly IRepository<Rating> _repository;
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<Film> _filmRepository;
        private readonly IMapper _mapper;

        public RatingService(IRepository<Rating> repository, IMapper mapper, IRepository<User> userRepository, IRepository<Film> filmRepository, RepositoryContext context)
        {
            _repository = repository;
            _mapper = mapper;
            _userRepository = userRepository;
            _filmRepository = filmRepository;
            _context = context;
        }

        public void AddRating(AddRatingRequest request)
        {
            var user = _userRepository.GetById(request.UserId);

            if (user == null)
            {
                throw new Exception("User does not exist.");
            }
            var film = _filmRepository.GetById(request.FilmId);

            if (film == null)
            {
                throw new Exception("Film does not exist.");
            }

            var rating = _mapper.Map<AddRatingRequest, Rating>(request);

            using (var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    var existingMark = _repository.GetAllQueryable()
                        .FirstOrDefault(p => p.UserId == rating.UserId && p.FilmId == rating.FilmId);

                    if (existingMark != null && existingMark.Mark == rating.Mark)
                    {
                        DeleteRating(existingMark.RatingId);
                    }
                    else if (existingMark != null)
                    {
                        existingMark.Mark = rating.Mark;
                        _repository.Update(existingMark);
                    }
                    else
                    {
                        _repository.Insert(rating);
                    }
                    transaction.Commit();
                }
                catch
                {
                    transaction.Rollback();
                }
            }

        }

        public void DeleteRating(int ratingId)
        {
            var rating = _repository.GetById(ratingId);

            if (rating == null)
            {
                throw new Exception("Rating does not exist.");
            }

            _repository.Delete(ratingId);

        }

        public int GetRatingFilm(int userId, int filmId)
        {
            var rating = _repository.GetAllQueryable().FirstOrDefault(p => p.UserId == userId && p.FilmId == filmId);

            if (rating == null)
            {
                throw new Exception("Mark does not exist");
            }

            return rating.Mark;
        }
    }
}
