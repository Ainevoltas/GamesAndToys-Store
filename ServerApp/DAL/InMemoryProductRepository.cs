using ServerApp.Data;
using ServerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.DAL
{
    public class InMemoryProductRepository : AbstractProductRepository<Product, ApiContext>
    {
        public InMemoryProductRepository(ApiContext context) : base(context)
        {
            DataSeederGenerator.InitializeDb(context);
        }
    }
}
