using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using AutoMapper;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;

namespace FilmPortal.BusinessLayer.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly IRepository<User> _repository;
        private readonly IMapper _mapper;

        public IdentityService(IRepository<User> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public ClaimsIdentity GetIdentity(IdentityModel model)
        {
            var user = _repository.GetAll().FirstOrDefault(p => p.Login == model.Username);
            if (user == null) return null;
            var sha256 = new SHA256Managed();
            var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(model.Password)));
            if (passwordHash != user.Password) return null;
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
            };
            var identity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            return identity;
        }

        public bool AddUser(IdentityModel model)
        {
            var userTest = _repository.GetAll().FirstOrDefault(p => p.Login == model.Username);

            if (userTest != null || string.IsNullOrEmpty(model.Username) || string.IsNullOrEmpty(model.Password))
            {
                return false;
            }

            var sha256 = new SHA256Managed();
            model.Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(model.Password)));
            var user = _mapper.Map<IdentityModel, User>(model);
            _repository.Insert(user);

            return true;
        }
    }
}
