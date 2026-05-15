using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiForncedores.model;

namespace ApiForncedores.dtos.fornecedor
{
    public class SimpleFornecedorRequestDTO
    {
        public SimpleFornecedorRequestDTO(Fornecedor data)
        {
            Id = data.Id;
            Cnpj = data.Cnpj;
            RazaoSocial = data.RazaoSocial;
            Email = data.Email;
            Cidade = data.Cidade;
            Uf = data.Uf;
        }

        public int Id { get; set; }
        public string Cnpj { get; set; } = string.Empty;
        public string RazaoSocial { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Cidade { get; set; } = string.Empty;
        public string Uf { get; set; } = string.Empty;
    }
}