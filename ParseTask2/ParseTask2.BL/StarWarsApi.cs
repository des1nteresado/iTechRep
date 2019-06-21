using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using ParseTask2.BL.Models;

namespace ParseTask2.BL
{
    public class StarWarsApi
    {
        protected readonly string BaseAddress = @"http://swapi.co/api/";
        protected readonly string AcceptHeader = "application/json";

        HttpClient GetClient()
        {
            var client = new HttpClient();

            client.BaseAddress = new Uri(BaseAddress);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(AcceptHeader));

            return client;
        }

        public async Task<T> GetAsync<T>(string url)
        {

            T result = default(T);

            using (HttpClient client = GetClient())
            {
                HttpResponseMessage response = await client.GetAsync(url);
                //throw if error
                response.EnsureSuccessStatusCode();
                result = await response.Content.ReadAsAsync<T>();
            }

            return result;
        }


        public async Task<StarWarsEntityListLim<StarshipLim>> GetListStarShips()
        {
            var pages = new List<string>();

            for (int i = 1; i < 5; i++)
            {
                pages.Add(i.ToString());
            }

            var starList = new StarWarsEntityListLim<StarshipLim> { Results = new List<StarshipLim>() };

            foreach (var page in pages)
            {
                var pageStarShips = await GetStarshipByPageAsync(page);
                starList.Results.AddRange(pageStarShips.Results);
            }

            foreach (var starShip in starList.Results)
            {
                starShip.Index = starList.Results.IndexOf(starShip) + 1;
            }

            return starList;
        }

        public async Task<StarWarsEntityListLim<StarshipLim>> GetStarshipByPageAsync(string page = "1")
        {
            var url = $"starships?page={page}";
            var starList = await GetAsync<StarWarsEntityListLim<StarshipLim>>(url);
            foreach (var starShip in starList.Results)
            {
                starShip.Index = starList.Results.IndexOf(starShip) + 1;
            }
            return starList;
        }

        public StarWarsEntityListLim<StarshipLim> GetStarshipByPage(string page = "1")
        {
            var url = $"starships?page={page}";
            var starList = GetAsync<StarWarsEntityListLim<StarshipLim>>(url).Result;
            foreach (var starShip in starList.Results)
            {
                starShip.Index = starList.Results.IndexOf(starShip) + 1;
            }
            return starList;
        }


    }
}
