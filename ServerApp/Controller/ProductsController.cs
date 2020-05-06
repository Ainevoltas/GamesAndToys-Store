using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerApp.DAL;
using ServerApp.Models;

namespace ServerApp.Controller
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ProductsController : AbstractProductsController<Product, InMemoryProductRepository>
    {
        public ProductsController(InMemoryProductRepository repository) : base(repository)
        {

        }
    }
}