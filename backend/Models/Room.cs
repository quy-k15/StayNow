using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Room
    {
        [Key]
        public int IdRoom { get; set; }

        [ForeignKey("Hotel")]
        public int IdHotel { get; set; }
        public Hotel Hotel { get; set; }

        public string RoomType { get; set; }

        public decimal PricePerNight { get; set; }

        public int MaxGuests { get; set; }

        public string Description { get; set; }

        public int Quantity { get; set; }

        // Quan hệ: Room nằm trong nhiều BookingDetail
        public ICollection<BookingDetail> BookingDetails { get; set; }
    }
}
