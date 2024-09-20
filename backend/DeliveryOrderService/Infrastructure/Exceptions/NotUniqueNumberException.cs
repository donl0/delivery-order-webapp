namespace Infrastructure.Exceptions
{
    public class NotUniqueNumberException: Exception
    {
        public NotUniqueNumberException(Guid guid)
       : base($"Generated Guid {guid} was not unique")
        {
        }
    }
}
