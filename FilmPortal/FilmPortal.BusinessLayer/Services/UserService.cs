using System.Linq;
using AutoMapper;
using FilmPortal.BusinessLayer.Entities;
using FilmPortal.BusinessLayer.Interfaces;
using FilmPortal.DataLayer.Entities;
using FilmPortal.DataLayer.Interfaces;

namespace FilmPortal.BusinessLayer.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _repository;
        private readonly IMapper _mapper;

        public UserService(IRepository<User> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public UserModel GetUserByName(string username)
        {
            var user = _repository.GetAll().FirstOrDefault(p => p.Login == username);
            var userModel = _mapper.Map<User, UserModel>(user);
            return userModel;
        }
    }
}
