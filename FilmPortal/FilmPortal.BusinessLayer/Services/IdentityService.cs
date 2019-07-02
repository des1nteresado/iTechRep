using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;

namespace FilmPortal.BusinessLayer.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly IRepository<User> _repository;

        public IdentityService(IRepository<User> repository)
        {
            _repository = repository;
        }

        public User GetUser(string userName)
        {
            return _repository.List().FirstOrDefault(p => p.Login == userName);
        }

        public ClaimsIdentity GetIdentity(string userName, string password)
        {
            ClaimsIdentity identity = null;
            var user = GetUser(userName);
            if (user == null) return null;
            var sha256 = new SHA256Managed();
            var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));
            if (passwordHash != user.Password) return null;
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
            };
            identity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            return identity;
        }
    }
}
