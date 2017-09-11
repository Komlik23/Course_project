using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_with_angular.Models
{
    public class Target
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public double Summ { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        public bool Achieved { get; set; }
    }
}
