using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ParseTask2.BL;

namespace ParseTask2.Controllers
{
    [Route("parse")]
    [ApiController]
    public class ParseController : ControllerBase
    {
        private readonly StarWarsApi _api = new StarWarsApi();

        [HttpGet("starAsync")]
        [FormatFilter]
        public async Task<IActionResult> GetStarAsync()
        {
            var starShips = await _api.GetListStarShips();

            if (starShips == null)
                return NoContent();

            return Ok(new { starShips.Results.Count, starShips.Results });
        }

        [HttpGet("star")]
        [FormatFilter]
        public IActionResult GetStar()
        {
            var starShips = _api.GetStarshipByPage();

            if (starShips == null)
                return NoContent();

            return Ok(new { starShips.Results.Count, starShips.Results });
        }
    }
}
