using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Course_with_angular.Models
{
    public class Project_Model
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime DateOfEnd { get; set; }
        public DateTime  CreatedOn { get; set; }

        public string Content { get; set; }
        public string Description { get; set; }
        public string ImageReference { get; set; }
        public string UserName { get; set; }
        [JsonIgnore]
        public List<Target> Targets { get; set; }
        [JsonIgnore]
        public List<Comment> Comments { get; set; }
        public List<Rate> Rates { get; set; }
       
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
        [JsonIgnore]
        public List<TagLink> TagLinks { get; set; }

     


    }

}
