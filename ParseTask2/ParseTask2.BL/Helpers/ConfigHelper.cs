using System.Net.Http;

namespace ParseTask2.BL.Helpers
{
    public class ConfigHelper
    {
        public string Url { get; set; }
        public HttpClient GetClient()
        {
            var client = new HttpClient();
            return client;
        }
    }
}
