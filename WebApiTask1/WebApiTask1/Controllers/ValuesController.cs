using System;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiTask1.Models;

namespace WebApiTask1.Controllers
{
    [Route("sum")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET /sum/5/6.json
        [HttpGet("{a:int:min(0)}/{b:int:max(0)}.{format?}"), FormatFilter]
        [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Get(string a, string b)//int int
        {
            int validParam;
            if (a == null || !int.TryParse(a, out validParam)) return BadRequest();
            //var result = new Result<int?> { A = a, B = b, Sum = a + b };
            return BadRequest();
        }
    }
}