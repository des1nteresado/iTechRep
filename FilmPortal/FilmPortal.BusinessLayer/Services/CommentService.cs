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
        public bool AddComment(AddCommentRequest request)
        {
            var user = _userRepository.GetById(request.UserId);
            var film = _filmRepository.GetById(request.FilmId);

            if (user == null || film == null || string.IsNullOrEmpty(request.Comment))
            {
                return false;
            }

            var comment = _mapper.Map<AddCommentRequest, Comment>(request);
            _repository.Insert(comment);

            return true;
        }

        public bool DeleteComment(int commentId)
        {
            var comment = _repository.GetById(commentId);

            if (comment == null)
            {
                return false;
            }

            _repository.Delete(commentId);

            return true;
        }

        public bool UpdateComment(Comment comment)
        {
            if (comment == null)
            {
                return false;
            }

            _repository.Update(comment);

            return true;
        }
    }
}
