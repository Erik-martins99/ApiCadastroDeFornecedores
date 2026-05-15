using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ApiForncedores.Data;
using ApiForncedores.dtos.fornecedor;
using ApiForncedores.service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace ApiForncedores.controller
{
    [ApiController]
    [Route("fornecedor")]
    public class FornecedorController : ControllerBase
    {
        private readonly FornecedorService _service;
        public FornecedorController(FornecedorService service)
        {
            _service = service;
        }

        [Authorize(Roles = "User")]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_service.GetAll());
        }

        [Authorize(Roles = "User")]
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetbyId([FromRoute] int id)
        {
            var fornecedor = _service.GetFornecedor(id);
            if (fornecedor == null)
            {
                return NotFound("Fornecedor não encontrado!");
            }
            return Ok(fornecedor);
        }

        [Authorize(Roles = "User")]
        [HttpGet]
        [Route("user")]
        public IActionResult GetbyToken()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return Unauthorized();
            }
            var fornecedor = _service.GetFornecedor(int.Parse(userId.Value));
            if (fornecedor == null)
            {
                return NotFound("Fornecedor não encontrado!");
            }
            return Ok(fornecedor);
        }

        [HttpPost]
        public async Task<IActionResult> CreateFornecedor([FromBody] CreateFornecedorDTO data)
        {
            var fornecedor = await _service.Create(data);

            if (fornecedor == null)
            {
                return Conflict(new
                {
                    message = "Fornecedor já cadastrado com esse CNPJ"
                });
            }
            return CreatedAtAction(nameof(GetbyId), new {id = fornecedor.Id}, fornecedor);
        }

        [Authorize(Roles = "User")]
        [HttpPut]
        public async Task<IActionResult> UpdateFornecedor([FromBody] UpdateFornecedorDTO data)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return Unauthorized();
            }
            var fornecedor = await _service.Update(int.Parse(userId.Value), data);
            if (fornecedor == null)
            {
                return NotFound("Fornecedor não encontrado!");
            }
            return Ok(fornecedor);
        }

        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> DeleteFornecedor()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return Unauthorized();
            }
            await _service.Delete(int.Parse(userId.Value));
            return NoContent();
        }
    }
}