namespace Course_with_angular.Models
{
    public enum Status
    {
        Success = 1,
        Failure = 0
    }

    public class ResultModel
    {
        public Status Status { get; private set; }

        public string Error { get; private set; }

        private ResultModel()
        { }

        public static ResultModel Success()
        {
            return new ResultModel
            {
                Status = Status.Success
            };
        }

        public static ResultModel Failure(string errorMessage)
        {
            return new ResultModel()
            {
                Status = Status.Failure,
                Error = errorMessage
            };
        }
    }
}
