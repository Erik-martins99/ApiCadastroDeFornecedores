using ApiForncedores.Data;
using ApiForncedores.model;
using ApiForncedores.service;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase
{
    private readonly TokenService _tokenService;
    private readonly AppDbContext _context;

    public AuthController(TokenService tokenService, AppDbContext context)
    {
        _tokenService = tokenService;
        _context = context;
    }

    [HttpPost("login")]
    public IActionResult Login(LoginRequest request)
    {
        var user = _context.Fornecedores
            .FirstOrDefault(u => u.Cnpj == request.Cnpj);

        if (user == null)
            return Unauthorized();

        var passwordValid = BCrypt.Net.BCrypt.Verify(
            request.Password,
            user.Password
        );

        if (!passwordValid)
            return Unauthorized();

        var token = _tokenService.GenerateToken(user);

        return Ok(new
        {
            token
        });
    }
}