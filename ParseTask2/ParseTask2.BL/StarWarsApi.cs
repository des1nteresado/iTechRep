using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using ParseTask2.BL.Helpers;
using ParseTask2.BL.Models;

namespace ParseTask2.BL
{
    public class StarWarsApi
    {
        public async Task<T> GetAsync<T>(string url)
        {
            T result;

            using (var client = ConfigHelper.GetClient())
            {
                var response = await client.GetAsync(url);
                response.EnsureSuccessStatusCode();
                result = await response.Content.ReadAsAsync<T>();
            }

            return result;
        }

        public async Task<List<StarshipLim>> GetListStarShips()
        {
            var starList = new StarWarsEntityListLim<StarshipLim>();

            do
            {
                var url = !starList.IsNext ? "https://swapi.co/api/starships/" : starList.Next;
                var pageStarShips = await GetAsync<StarWarsEntityListLim<StarshipLim>>(url);
                starList.Next = pageStarShips.Next;
                starList.Results.AddRange(pageStarShips.Results);
            } while (starList.IsNext);

            return GetHelper.GetEnumeration(starList.Results);
        }

        public async Task<List<StarshipLim>> GetStarshipByPageAsync(int page = 1)
        {
            var url = $"https://swapi.co/api/starships?page={page}";
            var starList = await GetAsync<StarWarsEntityListLim<StarshipLim>>(url);
            return GetHelper.GetEnumeration(starList.Results);
        }

        public List<StarshipLim> GetStarshipByPage(int page = 1)
        {
            var url = $"https://swapi.co/api/starships?page={page}";
            var starList = GetAsync<StarWarsEntityListLim<StarshipLim>>(url).Result;

            return GetHelper.GetEnumeration(starList.Results);
        }
    }
}
