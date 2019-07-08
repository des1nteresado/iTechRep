using System.Collections.Generic;
using FilmPortal.BusinessLayer.Entities;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IUserService
    {
        UserModel GetUserByName(string username);
    }
}
