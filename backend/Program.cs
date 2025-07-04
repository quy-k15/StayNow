using backend.Data;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
// connect MySQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<StayNowDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

//Controller
builder.Services.AddControllers();
//swagger
builder.Services.AddEndpointsApiExplorer(); // 🔑 Quan trọng để Swagger hoạt động
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "StayNow API",
        Version = "v1"
    });
});          // 🔑 Tạo tài liệu Swagger UI

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();                       // 🔧 Tạo tài liệu Swagger JSON
    app.UseSwaggerUI();                     // 🔧 Hiển thị Swagger UI tại /swagger
}

app.UseHttpsRedirection();

// Mapping Controller route
app.MapControllers();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", 
    "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

// Define minimal API endpoint with Swagger metadata
app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithDescription("Get a 5-day weather forecast.")
.WithTags("Weather Forecast")  // ✅ Gắn tag để hiển thị nhóm trong Swagger
.Produces<IEnumerable<WeatherForecast>>(StatusCodes.Status200OK);

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

