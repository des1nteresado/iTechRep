using System.Collections.Generic;
using ParseTask2.BL.Models;

namespace ParseTask2.BL.Helpers
{
    public static class GetHelper
    {
        public static List<StarshipLim> GetEnumeration(List<StarshipLim> starList, int firstIndex = 1)
        {
            foreach (var starShip in starList)
            {
                starShip.Index = starList.IndexOf(starShip) + firstIndex;
            }

            return starList;
        }
    }
}
