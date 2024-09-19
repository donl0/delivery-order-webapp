using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class Order
    {
        public long Id { get; set; }
        [Required]
        public string SenderCity { get; set; }
        [Required]
        public string SenderAddress { get; set; }
        [Required]
        public string RecipientCity { get; set; }
        [Required]
        public string RecipientAddress { get; set; }
        [Required]
        public uint CargoWeight { get; set; }
        [Required]
        public DateTime CargoPickupDate { get; set;}
    }
}
