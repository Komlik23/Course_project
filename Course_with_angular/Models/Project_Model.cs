using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Course_with_angular.Models
{
    public class Project_Model
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime DateOfEnd { get; set; }
        public string Content { get; set; }
        public string Description { get; set; }
        public string ImageReference { get; set; }
        [JsonIgnore]
        public List<Target> Targets { get; set; }
        [JsonIgnore]
        public List<Comment> Comments { get; set; }
        public int Rate { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
        [JsonIgnore]
        public List<TagLink> TagLinks { get; set; }
    }
}
