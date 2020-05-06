using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Data
{
    public interface IEntity
    {
        public long Id { get; set; }
    }
}
