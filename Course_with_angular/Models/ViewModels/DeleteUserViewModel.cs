namespace Course_with_angular.Controllers
{
    internal class DeleteUserViewModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsValidatedByAdmin { get; set; }
        public string Passport { get; set; }
    }
}