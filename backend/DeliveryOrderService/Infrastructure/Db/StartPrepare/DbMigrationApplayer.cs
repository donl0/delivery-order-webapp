using Application.Interfaces;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Db.StartPrepare
{
    public static class DbMigrationApplayer
    {
        public async static Task MakeMigrationsAsync(this IServiceProvider services)
        {
            using (var scope = services.CreateScope())
            {
                OrderDbContext dbContext = (OrderDbContext)scope.ServiceProvider.GetRequiredService<IDbContext>();
                var migrator = dbContext.Database.GetService<IMigrator>();
                await migrator.MigrateAsync();
            }
        }

        public static async Task WaitForDatabaseAsync(this IServiceProvider services, int retryCount = 40, TimeSpan? delay = null)
        {
            delay ??= TimeSpan.FromSeconds(20);

            using (var scope = services.CreateScope())
            {
                var dbContext = (OrderDbContext)scope.ServiceProvider.GetRequiredService<IDbContext>();

                for (int i = 0; i < retryCount; i++)
                {
                    try
                    {
                        await dbContext.Database.OpenConnectionAsync();
                        await dbContext.Database.CloseConnectionAsync();
                        Console.WriteLine("Database is available.");
                        return;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Database is not available, retrying... ({i + 1}/{retryCount})");
                        Console.WriteLine($"Error: {ex.Message}");
                    }

                    await Task.Delay(delay.Value);
                }

                throw new Exception("Failed to connect to the database after multiple attempts.");
            }
        }
    }
}