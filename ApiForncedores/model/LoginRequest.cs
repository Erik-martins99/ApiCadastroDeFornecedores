using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiForncedores.model
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Error: CNPJ não informado, por favor informe o CNPJ para login!")]
        public string Cnpj { get; set; } = string.Empty;

        [Required(ErrorMessage = "Error: Senha não informada, por favor informe a senha para login!")]
        public string Password { get; set; } = string.Empty;
    }
}