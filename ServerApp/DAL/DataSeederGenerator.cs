﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ServerApp.Data;
using ServerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.DAL
{
    public class DataSeederGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApiContext(
                serviceProvider.GetRequiredService<DbContextOptions<ApiContext>>()))
            {
                // Look for any product item.
                if (context.Products.Any())
                {
                    return;   // Data was already seeded
                }              

                context.SaveChanges();
            }
        }

        public static void InitializeDb(ApiContext context)
        {          
                // Look for any product item.
                if (context.Products.Any())
                {
                    return;   // Data was already seeded
                }

            context.Add(new Product()
            {
                Id = 01,
                Name = "Mario Bros 2",
                Description = "The new nintendo adventure",
                AgeRestriction = 13,
                Company = "Nintendo",
                Price = 9.99m
            });

            context.Add(new Product()
            {
                Id = 02,
                Name = "Castlevania",
                Description = "Vampire hunter game",
                AgeRestriction = 13,
                Company = "Konami",
                Price = 5.99m
            });

            context.Add(new Product()
            {
                Id = 03,
                Name = "Lego car",
                Description = "Make your own car with legos",
                AgeRestriction = 5,
                Company = "Lego",
                Price = 10.99m
            });

            context.Add(new Product()
            {
                Id = 04,
                Name = "Lego Starship",
                Description = "Make your own Starship with legos",
                AgeRestriction = 8,
                Company = "Lego",
                Price = 20.99m
            });

            context.Add(new Product()
            {
                Id = 05,
                Name = "Barbie developer",
                Description = "Become a developer!",
                AgeRestriction = 4,
                Company = "Mattel",
                Price = 9.99m
            });

            context.SaveChanges();            
        }
    }
}
