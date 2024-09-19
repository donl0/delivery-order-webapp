using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Interfaces
{
    public interface IDbContext
    {
        public DbSet<Order> Orders { get; }
    }
}
