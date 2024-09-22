using Application.Interfaces;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Db
{
    public class OrderDbContext : DbContext, IDbContext
    {
        public DbSet<Order> Orders { get; set; }

        public OrderDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>(order =>
            {
                order.OwnsOne(o => o.Sender, sender =>
                {
                    sender.Property(s => s.City).HasColumnName("SenderCity").IsRequired();
                    sender.Property(s => s.Address).HasColumnName("SenderAddress").IsRequired();
                });

                order.OwnsOne(o => o.Recipient, recipient =>
                {
                    recipient.Property(r => r.City).HasColumnName("RecipientCity").IsRequired();
                    recipient.Property(r => r.Address).HasColumnName("RecipientAddress").IsRequired();
                });
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
