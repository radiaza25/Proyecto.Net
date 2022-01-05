using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using viaje.express.data;
using viaje.express.model;

namespace viaje.express.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChoferController : ControllerBase
    {

        private readonly ILogger<ChoferController> _logger;
        private readonly ChoferBD _choferBd;

        public ChoferController(ILogger<ChoferController> logger, ChoferBD choferBd)
        {
            _logger = logger;
            _choferBd = choferBd;
        }

        [HttpGet]
        public List<Chofer> Get()
        {
            return _choferBd.Listar();
        }

        [HttpGet]
        [Route("{id}")]
        public Chofer Get(int id)
        {
            return _choferBd.Obtener(id);
        }

        [HttpPost]
        public Chofer Post(Chofer model)
        {
            return _choferBd.Insertar(model.CooperativaId, model.PresonaRolId, model.VehiculoId, model.EstadoChoferId, model.CreatedBy);
        }

        [HttpPut]
        [Route("{id}")]
        public Resultado Put(int id, Chofer model)
        {
            return _choferBd.Modificar(id, model.CooperativaId, model.PresonaRolId, model.VehiculoId, model.EstadoChoferId, model.ModifiedBy);
        }

        [HttpDelete]
        [Route("{id}")]
        public Resultado Delete(int id)
        {
            int deletedBy = 0;
            return _choferBd.Eliminar(id, deletedBy);
        }

    }
}
