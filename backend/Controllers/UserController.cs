using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]

public class UserController : ControllerBase
{
    private readonly StayNowDbContext _context;
    private readonly IConfiguration _configuration;

    public UserController(StayNowDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpGet("by-email")]
    public async Task<ActionResult> GetUserByEmail([FromQuery] string email)
    {
        try
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null)
                return NotFound();
            return Ok(user);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "Lỗi Server" + ex);
        }
    }

    [HttpGet ("by-phone")]
    public async Task<ActionResult> GetUserByPhone([FromQuery] string phone)
    {
        try
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Phone == phone);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "Lỗi Server" + ex);
        }
    }
    
}