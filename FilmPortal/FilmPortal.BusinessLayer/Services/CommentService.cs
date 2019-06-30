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
        private readonly IMapper _mapper;

        public CommentService(IRepository<Comment> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public void AddComment(AddCommentRequest request)
        {
            var comment = _mapper.Map<AddCommentRequest, Comment>(request);
            _repository.Insert(comment);
        }

        public void DeleteComment(int commentId)
        {
            _repository.Delete(commentId);
        }

        public void UpdateComment(Comment comment)
        {
            _repository.Update(comment);
        }
    }
}
