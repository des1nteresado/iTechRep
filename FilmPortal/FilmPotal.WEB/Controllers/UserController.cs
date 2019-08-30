using FilmPortal.BusinessLayer.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FilmPotal.WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService serviceUser)
        {
            _userService = serviceUser;
        }

        [Authorize]
        [Route("user")]
        [HttpPost]
        public IActionResult GetUser([FromBody]int userId)
        {
            var user = _userService.GetUserById(userId);

            if (user == null)
            {
                return NoContent();
            }

            return Ok(user);
        }

    }
}