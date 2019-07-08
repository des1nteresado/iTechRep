using System;
using AutoMapper;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;

namespace FilmPortal.BusinessLayer.Services
{
    public class CommentService : ICommentService
    {
        private readonly IRepository<Comment> _repository;
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<Film> _filmRepository;
        private readonly IMapper _mapper;

        public CommentService(IRepository<Comment> repository, IMapper mapper, IRepository<User> repositoryUser, IRepository<Film> filmRepository)
        {
            _repository = repository;
            _mapper = mapper;
            _userRepository = repositoryUser;
            _filmRepository = filmRepository;
        }

        public void AddComment(AddCommentRequest request)
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
            if (string.IsNullOrEmpty(request.Comment))
            {
                throw new Exception("Comment does not exist or empty.");
            }

            var comment = _mapper.Map<AddCommentRequest, Comment>(request);
            _repository.Insert(comment);
        }

        public void DeleteComment(int commentId)
        {
            var comment = _repository.GetById(commentId);

            if (comment == null)
            {
                throw new Exception("Comment does not exist.");
            }

            _repository.Delete(commentId);
        }

        public void UpdateComment(Comment comment)
        {
            if (comment == null)
            {
                throw new Exception("Comment is null");
            }

            _repository.Update(comment);
        }
    }
}
