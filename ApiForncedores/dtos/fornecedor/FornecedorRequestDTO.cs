using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ApiForncedores.model;

namespace ApiForncedores.dtos.fornecedor
{
    public class FornecedorRequestDTO
    {
        public FornecedorRequestDTO(Fornecedor data)
        {
            Id = data.Id;
            Cnpj = data.Cnpj;
            RazaoSocial = data.RazaoSocial;
            NomeFantasia = data.NomeFantasia;
            Email = data.Email;
            Telefone = data.Telefone;
            Endereco = data.Endereco;
            Cidade = data.Cidade;
            Uf = data.Uf;
            AtividadePrincipal = data.AtividadePrincipal;
        }

        public int Id { get; set; } 
        public string Cnpj { get; set; } = string.Empty;
        public string RazaoSocial { get; set; } = string.Empty;
        public string NomeFantasia { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
        public string Endereco { get; set; } = string.Empty;
        public string Cidade { get; set; } = string.Empty;
        public string Uf { get; set; } = string.Empty;
        public string AtividadePrincipal { get; set; } = string.Empty;
    }
}