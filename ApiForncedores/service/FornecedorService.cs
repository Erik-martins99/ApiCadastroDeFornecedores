using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiForncedores.Data;
using ApiForncedores.dtos.fornecedor;
using ApiForncedores.model;

namespace ApiForncedores.service
{
    public class FornecedorService
    {
        public readonly AppDbContext _context;
        public FornecedorService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<SimpleFornecedorRequestDTO> GetAll()
        {
            return _context.Fornecedores.ToList().Select(f => new SimpleFornecedorRequestDTO(f));
        }

        public FornecedorRequestDTO? GetFornecedor(int id)
        {
            var fornecedor = _context.Fornecedores.Find(id);
            if (fornecedor == null)
            {
                return null;
            }
            return new FornecedorRequestDTO(fornecedor);
        }

        public async Task<FornecedorRequestDTO?> Create(CreateFornecedorDTO data)
        {
            var fornecedorExists = _context.Fornecedores
                .Any(u => u.Cnpj == data.Cnpj);

            if (fornecedorExists)
                {
                    return null;
                }

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(
                data.Password
            );

            var fornecedor = new Fornecedor(data, hashedPassword);
            _context.Fornecedores.Add(fornecedor);

            await _context.SaveChangesAsync();

            return new FornecedorRequestDTO(fornecedor);
        }

        public async Task<FornecedorRequestDTO?> Update(int id, UpdateFornecedorDTO data)
        {
            var fornecedor = _context.Fornecedores.FirstOrDefault(x => x.Id == id);
            if (fornecedor == null)
            {
                return null;
            }

            fornecedor.Update(data);
            await _context.SaveChangesAsync();

            return new FornecedorRequestDTO(fornecedor);
        }

        public async Task<FornecedorRequestDTO?> Delete(int id)
        {
            var fornecedor = _context.Fornecedores.FirstOrDefault(x => x.Id == id);
            if (fornecedor == null)
            {
                return null;
            }
            _context.Fornecedores.Remove(fornecedor);
            await _context.SaveChangesAsync();
            return new FornecedorRequestDTO(fornecedor);
        }
    }
}