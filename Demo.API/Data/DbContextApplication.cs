using Demo.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Demo.API.Data
{
    public class DbContextApplication : DbContext
    {
        public DbContextApplication(DbContextOptions<DbContextApplication> options) : base(options) {}
        public DbSet<Value> values {get; set;}

    }
}