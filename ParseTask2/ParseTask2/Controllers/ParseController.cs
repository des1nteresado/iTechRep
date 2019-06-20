using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ParseTask2.Controllers
{
    [Route("parse")]
    [ApiController]
    public class ParseController : ControllerBase
    {
        // GET api/values
        [HttpGet("starAsync")]
        [FormatFilter]
        public async Task<IActionResult> GetStarAsync()
        {
            string result = "";
            using (var client = new HttpClient())
            {
                for (int i = 0; i < 8; i++)
                {
                    var response = await client.GetAsync($"https://swapi.co/api/starships/?page={i}");
                    if (response.StatusCode != HttpStatusCode.OK)
                    {
                        return BadRequest("Sorry");
                    }
                    HttpContent responseContent = response.Content;
                    result += await responseContent.ReadAsStringAsync();
                }
                return Ok(result);
            }
        }


        [HttpGet("star")]
        [FormatFilter]
        public IActionResult GetStar()
        {
            using (var client = new HttpClient())
            {
                var response = client.GetAsync("https://swapi.co/api/starships/").Result;
                if (response.IsSuccessStatusCode)
                {
                    HttpContent responseContent = response.Content;
                    var result = responseContent.ReadAsStreamAsync().Result;
                    return Ok(result);
                }
            }

            return BadRequest("Sorry");
        }
    }
}
