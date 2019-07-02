using System.Security.Claims;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IIdentityService
    {
        User GetUser(string userName);
        ClaimsIdentity GetIdentity(string userName, string password);

    }
}
