using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class StayNowDbContext : DbContext
    {
        public StayNowDbContext(DbContextOptions<StayNowDbContext> options) : base(options) { }

       public DbSet<User> Users { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<BookingDetail> BookingDetails { get; set; }
        public DbSet<Review> Reviews { get; set; }
    }
}
