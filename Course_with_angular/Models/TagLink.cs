
namespace Course_with_angular.Models
{
    public class TagLink
    {
        public int Id { get; set; }
        public int TagId { get; set; }
        public int ProjectId { get; set; }

        public Tag Tag { get; set; }
        public Project_Model Project { get; set; }
    }
}
