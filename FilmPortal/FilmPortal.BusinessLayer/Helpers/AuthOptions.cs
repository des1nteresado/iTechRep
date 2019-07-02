using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace FilmPortal.BusinessLayer.Helpers
{
    public class AuthOptions
    {
        public const string ISSUER = "FilmPortal";

        public const string AUDIENCE = "PortalUser";

        const string KEY = "authentification_security_key!qwe123";

        public const int LIFETIME = 60;

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
