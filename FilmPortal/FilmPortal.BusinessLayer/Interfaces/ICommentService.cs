using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface ICommentService
    {
        bool AddComment(AddCommentRequest comment);

        bool DeleteComment(int commentId);

        bool UpdateComment(Comment comment);
    }
}
