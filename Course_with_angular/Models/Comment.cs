using Newtonsoft.Json;
using System;

namespace Course_with_angular.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public DateTime Time { get; set; }
        public string Contain { get; set; }
        public int ProjectId { get; set; }

        [JsonIgnore]
        public Project_Model Project { get; set; }
    }
}
