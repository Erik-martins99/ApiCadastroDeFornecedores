using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiForncedores.dtos.fornecedor
{
    public class UpdateFornecedorDTO
    {
        public string RazaoSocial { get; set; } = string.Empty;
        public string NomeFantasia { get; set; } = string.Empty;

        [EmailAddress(ErrorMessage = "O email informado é inválido")]
        public string Email { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
        public string Endereco { get; set; } = string.Empty;
        public string Cidade { get; set; } = string.Empty;

        [StringLength(2, ErrorMessage = "A UF deve conter apenas 2 caracteres")]
        public string Uf { get; set; } = string.Empty;
        public string AtividadePrincipal { get; set; } = string.Empty;
    }
}