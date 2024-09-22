namespace Application.Exceptions
{
    public class NotFoundException : ApplicationLayerException
    {
        public NotFoundException()
        {
        }

        public NotFoundException(string message)
            : base($"{message} not found")
        {
        }
    }
}
