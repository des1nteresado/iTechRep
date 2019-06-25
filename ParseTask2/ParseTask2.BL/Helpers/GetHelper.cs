using ParseTask2.BL.Models;

namespace ParseTask2.BL.Helpers
{
    public static class GetHelper
    {
        public static StarWarsEntityListLim<StarshipLim> GetEnumeration(StarWarsEntityListLim<StarshipLim> starList, int firstIndex = 1)
        {
            foreach (var starShip in starList.Results)
            {
                starShip.Index = starList.Results.IndexOf(starShip) + firstIndex;
            }

            return starList;
        }
    }
}
