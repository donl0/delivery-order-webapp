namespace Application.Exceptions
{
    public class NotUniqueNumberException: ApplicationLayerException
    {
        public NotUniqueNumberException(Guid guid)
       : base($"Generated Guid {guid} was not unique")
        {
        }
    }
}
