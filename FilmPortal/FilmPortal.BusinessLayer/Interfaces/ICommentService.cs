using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface ICommentService
    {
        void AddComment(AddCommentRequest comment);

        void DeleteComment(int commentId);

        void UpdateComment(Comment comment);
    }
}
