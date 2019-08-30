using FilmPortal.BusinessLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IUserService
    {
        UserModel GetUserByName(string userName);
        UserModel GetUserById(int userId);

    }
}
