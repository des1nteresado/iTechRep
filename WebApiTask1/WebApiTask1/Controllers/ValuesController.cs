using Microsoft.AspNetCore.Mvc;
using WebApiTask1.Models;

namespace WebApiTask1.Controllers
{
    [Route("sum")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET sum/values?a=5&b=-5
        [HttpGet("values")]
        [FormatFilter]
        public IActionResult SumValues([FromQuery]SumRequest result)
        {
            if (result.A == null || result.B == null)
            {
                ModelState.AddModelError("", "Required params not set");
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(result);
        }
    }
}