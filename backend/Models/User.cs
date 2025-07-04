using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class User
    {
        [Key]
        public int IdUser { get; set; }

        public string FullName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public string Phone { get; set; }

        public string Role { get; set; }

        public ICollection<Booking> Bookings { get; set; }

        public ICollection<Review> Reviews { get; set; }
    }
}
