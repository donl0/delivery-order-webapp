namespace Application.Exceptions
{
    public class ApplicationLayerException : Exception
    {
        public ApplicationLayerException()
        {
        }

        public ApplicationLayerException(string message)
            : base(message)
        {
        }
    }
}
