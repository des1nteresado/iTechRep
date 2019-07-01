using System.Linq;
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
    }
}
