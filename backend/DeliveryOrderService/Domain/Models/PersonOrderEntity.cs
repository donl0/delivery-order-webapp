using Domain.Exceptions;

namespace Domain.Models
{
    public class PersonOrderEntity {
        public string City { get; private set; }
        public string Address { get; private set; }

        public PersonOrderEntity() { }

        public PersonOrderEntity(string city, string address)
        {
            City = city;
            Address = address;

            Validate();
        }

        private void Validate() {
            if (string.IsNullOrWhiteSpace(City))
                throw new FieldIsNullOrEmptyException(nameof(City));

            if (string.IsNullOrWhiteSpace(Address))
                throw new FieldIsNullOrEmptyException(nameof(Address));
        }
    }
}
