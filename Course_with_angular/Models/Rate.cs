using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_with_angular.Models
{
    public class Rate
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public string UserId { get; set; }
        public float Mark { get; set; }
    }
}
