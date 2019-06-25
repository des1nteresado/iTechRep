using System.Net.Http;

namespace ParseTask2.BL.Helpers
{
    public static class ConfigHelper
    {
        public static HttpClient GetClient()
        {
            var client = new HttpClient();
            return client;
        }
    }
}
