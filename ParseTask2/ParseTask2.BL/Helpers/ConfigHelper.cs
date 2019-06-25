using System;
using System.Net.Http;
using System.Net.Http.Headers;

namespace ParseTask2.BL.Helpers
{
    public static class ConfigHelper
    {
        public static readonly string BaseAddress = @"http://swapi.co/api/";
        public static readonly string AcceptHeader = "application/json";

        public static HttpClient GetClient()
        {
            var client = new HttpClient();

            client.BaseAddress = new Uri(BaseAddress);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(AcceptHeader));

            return client;
        }
    }
}
