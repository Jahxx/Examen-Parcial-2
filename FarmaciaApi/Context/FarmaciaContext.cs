using FarmaciaApi.Models;
using Microsoft.EntityFrameworkCore;

namespace FarmaciaApi.Context;

public class FarmaciaContext : DbContext
{
    public FarmaciaContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Producto> Productos { get; set; }
    public DbSet<Categoria> Categorias { get; set; }
}