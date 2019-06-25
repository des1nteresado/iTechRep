using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ParseTask2.BL;
using ParseTask2.BL.Helpers;

namespace ParseTask2.Controllers
{
    [Route("parse")]
    [ApiController]
    public class ParseController : ControllerBase
    {
        private readonly StarWarsApi _api;

        public ParseController(ConfigHelper configHelper)
        {
            _api = new StarWarsApi(configHelper);
        }

        [HttpGet("starAsync")]
        [FormatFilter]
        public async Task<IActionResult> GetStarAsync()
        {
            var starShips = await _api.GetListStarShips();

            if (starShips == null)
                return NoContent();

            return Ok(new { starShips.Count, starShips });
        }

        [HttpGet("star")]
        [FormatFilter]
        public IActionResult GetStar()
        {
            var starShips = _api.GetStarshipByPage();

            if (starShips == null)
                return NoContent();

            return Ok(new { starShips.Count, starShips });
        }
    }
}
