using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiForncedores.model;
using Microsoft.EntityFrameworkCore;

namespace ApiForncedores.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
            
        }

        public DbSet<Fornecedor> Fornecedores { get; set; }
    }
}