using Domain.Exceptions;

namespace Domain.Models
{
    public class Order : Entity
    {
        public PersonOrderEntity Sender { get; private set; }
        public PersonOrderEntity Recipient { get; private set; }
        public int CargoWeight { get; private set; }
        public Guid OrderNumber { get; private set; }
        public DateTime CargoPickupDate { get; private set; }

        public Order() { }

        public Order(string senderCity, string senderAddress, string recipientCity, string recipientAddress, int cargoWeight, DateTime cargoPickupDate)
        {
            CargoWeight = cargoWeight;
            CargoPickupDate = cargoPickupDate;
            Sender = new PersonOrderEntity(senderCity, senderAddress);
            Recipient = new PersonOrderEntity(recipientCity, recipientAddress);

            SetUniqueOrderNumber();
            Validate();
        }

        public void Update(Order updateWith) {
            if (updateWith == null)
                throw new ArgumentNullException(nameof(updateWith));

            Sender.Update(updateWith.Sender);
            Recipient.Update(updateWith.Recipient);

            CargoWeight = updateWith.CargoWeight;
            CargoPickupDate = updateWith.CargoPickupDate;

            Validate();
        }

        private void Validate()
        {
            if (Sender == null)
                throw new FieldIsNullOrEmptyException(nameof(Sender));

            if (Recipient == null)
                throw new FieldIsNullOrEmptyException(nameof(Recipient));

            if (CargoWeight <= 0)
                throw new WeightExceptino(nameof(CargoWeight));
        }

        private void SetUniqueOrderNumber() {
            OrderNumber = Guid.NewGuid();
        }
    }
}
