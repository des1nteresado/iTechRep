using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WebApiTask1.Controllers
{
    [Route("sum")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet("{a}/{b}.{format}"), FormatFilter]
        public ActionResult Get(int a, int b)
        {
            var values = new Dictionary<string, int>(3) { { "a", a }, { "b", b }, { "sum", a + b } };
            var myJsonValues = JsonConvert.SerializeObject(values);
            return Content(myJsonValues, "application/json");
        }
    }
}
