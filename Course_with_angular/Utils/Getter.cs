using Course_with_angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_with_angular.Utils
{
    public class Getter
    {
        internal static int GetRate(List<Rate> rates)
        {
            int final = 0;
            foreach (var rate in rates)
            {
                final += rate.Mark;
            }
            return final;

        }
    }
}
