using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ApiForncedores.validators;

namespace ApiForncedores.dtos.fornecedor
{
    public class CreateFornecedorDTO
    {
        [Required(ErrorMessage = "O CNPJ é obrigatório")]
        [StringLength(14, ErrorMessage = "O CNPJ deve ter no máximo 14 caracteres")]
        [ValidCnpj(ErrorMessage = "O CNPJ informado não possui uma estrutura válida.")]
        public string Cnpj { get; set; } = string.Empty;

        [Required(ErrorMessage = "A razão social é obrigatória")]
        public string RazaoSocial { get; set; } = string.Empty;

        [Required(ErrorMessage = "O nome fantasia é obrigatório")]
        public string NomeFantasia { get; set; } = string.Empty;

        [Required(ErrorMessage = "O email é obrigatório")]
        [EmailAddress(ErrorMessage = "O email informado é inválido")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "O telefone é obrigatório")]
        public string Telefone { get; set; } = string.Empty;

        [Required(ErrorMessage = "O endereço é obrigatório")]
        public string Endereco { get; set; } = string.Empty;

        [Required(ErrorMessage = "A cidade é obrigatória")]
        public string Cidade { get; set; } = string.Empty;

        [Required(ErrorMessage = "A UF é obrigatória")]
        [StringLength(2, ErrorMessage = "A UF deve conter apenas 2 caracteres")]
        public string Uf { get; set; } = string.Empty;

        [Required(ErrorMessage = "A atividade principal é obrigatória")]
        public string AtividadePrincipal { get; set; } = string.Empty;

        [Required(ErrorMessage = "A senha é obrigatória")]
        [MinLength(6, ErrorMessage = "A senha deve ter no mínimo 6 caracteres")]
        public string Password { get; set; } = string.Empty;
    }
}