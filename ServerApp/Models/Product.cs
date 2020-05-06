using ServerApp.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
    public class Product : IEntity
    {
        public long Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [MaxLength(100)]
        public string Description { get; set; }
        [Range(0, 100)]
        public long AgeRestriction { get; set; }
        [Required]
        [MaxLength(50)]
        public string Company { get; set; }
        [Column(TypeName = "decimal(8, 2)")]
        public decimal Price { get; set; }
    }
}
