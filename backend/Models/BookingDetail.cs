using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class BookingDetail
    {
        [Key]
        public int IdBookingDetail { get; set; }

        [ForeignKey("Booking")]
        public int IdBooking { get; set; }
        public Booking Booking { get; set; }

        [ForeignKey("Room")]
        public int IdRoom { get; set; }
        public Room Room { get; set; }

        public int NumAdults { get; set; }

        public int NumChildren { get; set; }
    }
}
