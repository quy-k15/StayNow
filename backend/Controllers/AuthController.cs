using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using backend.Data;
using backend.Models;
using backend.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly StayNowDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(StayNowDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDTO dto)
    {
        if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
            return BadRequest("Email already exists");

        var user = new User
        {
            FullName = dto.FullName,
            Email = dto.Email,
            Phone = dto.Phone,
            Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
            Role = "User"
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Tạo tài khoản thành công!" });

    }

    private string GenerateJwtToken(User user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["jwt:key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]// DS thông tin user 
        {
            new Claim(ClaimTypes.NameIdentifier, user.IdUser.ToString()),
            new Claim(ClaimTypes.Name, user.FullName),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role??"User")
        };

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],// Ai tạo
            audience: _configuration["Jwt:Audience"],// Ai nhận
            claims: claims,
            expires: DateTime.Now.AddHours(12),// Hiệu lực
            signingCredentials: creds//Chữ ký số
        );
        return new JwtSecurityTokenHandler().WriteToken(token);// Chuyển JwtSecurityToken thành string
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDTO dto)
    {
        var user = await _context.Users.FirstOrDefaultAsync(
            u => u.Email == dto.EmailOrPhone || u.Phone == dto.EmailOrPhone
        );
        if (user == null || !BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            return BadRequest("Tài khoản hoặc mật khẩu không đúng");

        string token = GenerateJwtToken(user);
        return Ok(new
        {
            message = "Đăng nhập thành công!",
            token,
            user = new
            {
                id = user.IdUser,
                fullName = user.FullName,
                email = user.Email,
                role = user.Role
            }
        });
    }

//     // POST: /api/auth/login
//     [HttpPost("login")]
//     public async Task<IActionResult> Login(LoginDTO dto)
//     {
//         var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
//         if (user == null || !BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
//             return Unauthorized("Invalid credentials");

    //         var token = GenerateJwtToken(user);
    //         return Ok(new { token });
    //     }

    //     private string GenerateJwtToken(User user)
    //     {
    //         var claims = new[]
    //         {
    //             new Claim(ClaimTypes.NameIdentifier, user.IdUser.ToString()),
    //             new Claim(ClaimTypes.Email, user.Email),
    //             new Claim(ClaimTypes.Role, user.Role ?? "User")
    //         };

    //         var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
    //         var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    //         var token = new JwtSecurityToken(
    //             issuer: _configuration["Jwt:Issuer"],
    //             audience: _configuration["Jwt:Audience"],
    //             claims: claims,
    //             expires: DateTime.Now.AddDays(7),
    //             signingCredentials: creds);

    //         return new JwtSecurityTokenHandler().WriteToken(token);
    //     }
    // }

} 