namespace Domain.Exceptions
{
    public class WeightExceptino : DomainException
    {
        public WeightExceptino(string fieldName)
        : base($"{fieldName} can not be negative or zero.")
        {
        }
    }
}
