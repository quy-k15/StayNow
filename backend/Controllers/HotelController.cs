using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HotelController : ControllerBase
    {
        private readonly StayNowDbContext _context;
        public HotelController(StayNowDbContext context)
        {
            _context = context;
        }
        //GET: api/hotel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetHotels()
        {
            return await _context.Hotels.ToListAsync();//truy vấn bất đồng bộ
        }
        //Set: api/hotel/5

        [HttpGet("{id}")]
        public async Task<ActionResult<Hotel>> GetHotel(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel == null)
                return NotFound();
            return hotel;
        }
        //POST: api/hotel
        [HttpPost]
        public async Task<ActionResult<Hotel>> CreateHotel(Hotel hotel)
        {
            _context.Hotels.Add(hotel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetHotel), new { id = hotel.IdHotel }, hotel);
        }

        //PUT: api/hotel/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHotel(int id, Hotel hotel)
        {
            if (id != hotel.IdHotel)
                return BadRequest();
            _context.Entry(hotel).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        //DETLET: api/hotel/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotell(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel == null)
                return NotFound();
            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}