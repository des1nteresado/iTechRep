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

        public async Task<StarWarsEntityListLim<StarshipLim>> GetListStarShips()
        {
            var starList = new StarWarsEntityListLim<StarshipLim>();

            var page = 1;
            do
            {
                var pageStarShips = await GetStarshipByPageAsync(page.ToString());
                starList.Next = pageStarShips.Next;
                starList.Results.AddRange(pageStarShips.Results);
                page++;
            } while (starList.IsNext);

            return GetHelper.GetEnumeration(starList);
        }

        public async Task<StarWarsEntityListLim<StarshipLim>> GetStarshipByPageAsync(string page = "1")
        {
            var url = $"starships?page={page}";
            var starList = await GetAsync<StarWarsEntityListLim<StarshipLim>>(url);
            return GetHelper.GetEnumeration(starList);
        }

        public StarWarsEntityListLim<StarshipLim> GetStarshipByPage(string page = "1")
        {
            var url = $"starships?page={page}";
            var starList = GetAsync<StarWarsEntityListLim<StarshipLim>>(url).Result;

            return GetHelper.GetEnumeration(starList);
        }
    }
}
