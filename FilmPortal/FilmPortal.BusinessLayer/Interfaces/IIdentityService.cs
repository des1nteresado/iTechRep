using System.Security.Claims;
using FilmPortal.BusinessLayer.Models;

namespace FilmPortal.BusinessLayer.Interfaces
{
    public interface IIdentityService
    {
        ClaimsIdentity GetIdentity(IdentityModel model);
        bool AddUser(IdentityModel model);
    }
}
