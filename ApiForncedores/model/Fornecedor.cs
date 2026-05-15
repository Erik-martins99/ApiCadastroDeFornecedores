using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ApiForncedores.dtos.fornecedor;

namespace ApiForncedores.model
{
    public class Fornecedor
    {
        public Fornecedor() {}

        public Fornecedor(CreateFornecedorDTO data, string hashPassword)
        {
            Cnpj = data.Cnpj;
            RazaoSocial = data.RazaoSocial;
            NomeFantasia = data.NomeFantasia;
            Email = data.Email;
            Telefone = data.Telefone;
            Endereco = data.Endereco;
            Cidade = data.Cidade;
            Uf = data.Uf;
            AtividadePrincipal = data.AtividadePrincipal;
            Password = hashPassword;
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
        public string Password { get; set; } = string.Empty;

        [Required]
        public string Role { get; set; } = "User";

        public void Update(UpdateFornecedorDTO data)
        {
            if (!string.IsNullOrWhiteSpace(data.RazaoSocial)) { RazaoSocial = data.RazaoSocial; }
            if (!string.IsNullOrWhiteSpace(data.NomeFantasia)) { NomeFantasia = data.NomeFantasia; }
            if (!string.IsNullOrWhiteSpace(data.Email)) { Email = data.Email; }
            if (!string.IsNullOrWhiteSpace(data.Telefone)) { Telefone = data.Telefone; }
            if (!string.IsNullOrWhiteSpace(data.Endereco)) { Endereco = data.Endereco; }
            if (!string.IsNullOrWhiteSpace(data.Cidade)) { Cidade = data.Cidade; }
            if (!string.IsNullOrWhiteSpace(data.Uf)) { Uf = data.Uf; }
            if (!string.IsNullOrWhiteSpace(data.AtividadePrincipal)) { AtividadePrincipal = data.AtividadePrincipal; }

        }
    }
}