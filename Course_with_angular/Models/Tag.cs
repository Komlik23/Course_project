using System.Collections.Generic;

namespace Course_with_angular.Models  
{
    public class Tag
    {
        public int Id { get; set; }
        public string Text { get; set; }


        public List<TagLink> Links { get; set; }
    }
}
