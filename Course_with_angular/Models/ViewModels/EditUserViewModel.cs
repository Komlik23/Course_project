namespace Course_with_angular.Models.AccountViewModels
{
    public class EditUserViewModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Passport { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsValidatedByAdmin { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
    }
}
