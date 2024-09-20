namespace Domain.Exceptions
{
    public class FieldIsNullOrEmptyException : DomainException
    {
        public FieldIsNullOrEmptyException(string fieldName)
        : base($"{fieldName} is required.")
        {
        }
    }
}