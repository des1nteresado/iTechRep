using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using ParseTask2.Models;

namespace ParseTask2.Controllers
{
    [Route("parse")]
    [ApiController]
    public class ParseController : ControllerBase
    {
        private StarWarsAPIClient _api = new StarWarsAPIClient();
        // GET api/values
        [HttpGet("starAsync")]
        [FormatFilter]
        public async Task<IActionResult> GetStarAsync()
        {
            var urls = new List<string>();

            for (int i = 1; i < 5; i++)
            {
                urls.Add($"https://swapi.co/api/starships/?page={i}");
            }

            var starShips = _api.GetListStarShips(urls);

            //if (starShips == null)
            //{
            //    return NoContent();
            //}

            //foreach (var star in starShips.results)
            //{
            //    star.Index = starShips.results.IndexOf(star) + 1;
            //}

            //foreach (var starList in result)
            //{
            //    for (int i = 0; i < starList.count; i++)
            //    {
            //        starList.results.
            //    }
            //    foreach (var star in starList)
            //    {
            //        star.Index = starList.IndexOf(star);
            //    }
            //}

            return Ok(starShips);
        }


        [HttpGet("star")]
        [FormatFilter]
        public IActionResult GetStar()
        {
            var starShips = _api.GetAllStarship();

            if (starShips == null)
            {
                return NoContent();
            }

            foreach (var star in starShips.results)
            {
                star.Index = starShips.results.IndexOf(star) + 1;
            }

            return Ok(starShips);
        }
    }
}
