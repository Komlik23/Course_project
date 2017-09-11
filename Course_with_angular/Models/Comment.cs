using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course_with_angular.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public DateTime Time { get; set; }
        public string Contain { get; set; }
    }
}
