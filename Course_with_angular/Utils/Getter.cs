using Course_with_angular.Models;
using System.Collections.Generic;


namespace Course_with_angular.Utils
{
    public class Getter
    {
        internal static double GetRate(List<Rate> rates)
        {
            int final = 0;
            foreach (var rate in rates)
            {
                final += rate.Mark;
            }
            return rates == null ? 0 : final / rates.Count;
        }
    }
}
