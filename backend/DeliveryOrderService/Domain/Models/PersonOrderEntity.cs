using Domain.Exceptions;
using System.Reflection;

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

        public void Update(PersonOrderEntity updateWith) {
            if (updateWith == null)
                throw new FieldIsNullOrEmptyException(nameof(updateWith));

            City = updateWith.City;
            Address = updateWith.Address;

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
