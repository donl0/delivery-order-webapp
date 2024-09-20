using Domain.Exceptions;

namespace Domain.Models
{
    public class Order : Entity
    {
        public string SenderCity { get; private set; }
        public string SenderAddress { get; private set; }
        public string RecipientCity { get; private set; }
        public string RecipientAddress { get; private set; }
        public int CargoWeight { get; private set; }
        public Guid OrderNumber { get; private set; }
        public DateTime CargoPickupDate { get; private set; }

        public Order() { }

        public Order(string senderCity, string senderAddress, string recipientCity, string recipientAddress, int cargoWeight, DateTime cargoPickupDate)
        {
            SenderCity = senderCity;
            SenderAddress = senderAddress;
            RecipientCity = recipientCity;
            RecipientAddress = recipientAddress;
            CargoWeight = cargoWeight;
            CargoPickupDate = cargoPickupDate;

            SerUniqueOrderNumber();

            Validate();
        }

        private void Validate()
        {
            if (string.IsNullOrWhiteSpace(SenderCity))
                throw new FieldIsNullOrEmptyException(nameof(SenderCity));

            if (string.IsNullOrWhiteSpace(SenderAddress))
                throw new FieldIsNullOrEmptyException(nameof(SenderAddress));

            if (string.IsNullOrWhiteSpace(RecipientCity))
                throw new FieldIsNullOrEmptyException(nameof(RecipientCity));

            if (string.IsNullOrWhiteSpace(RecipientAddress))
                throw new FieldIsNullOrEmptyException(nameof(RecipientAddress));

            if (CargoWeight <= 0)
                throw new WeightExceptino(nameof(CargoWeight));
        }

        private void SerUniqueOrderNumber() {
            OrderNumber = Guid.NewGuid();
        }
    }
}
