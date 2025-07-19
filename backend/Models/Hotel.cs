using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Hotel
    {
        [Key]
        public int IdHotel { get; set; }

        [Required]
        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public string Rating { get; set; }

         public string imgURL { get; set; }


        // Quan hệ: Hotel có nhiều Room, Review
        // public ICollection<Room>? Rooms { get; set; }// ? --> cho phép null
        // public ICollection<Review>? Reviews { get; set; }
    }
}
