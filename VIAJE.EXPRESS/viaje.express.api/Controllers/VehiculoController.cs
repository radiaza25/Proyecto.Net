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
    public class VehiculoController : ControllerBase
    {
        private readonly ILogger<VehiculoController> _logger;
        private readonly VehiculoBd _vehiculoBd;

        public VehiculoController(ILogger<VehiculoController> logger, VehiculoBd vehiculoBd)
        {
            _logger = logger;
            _vehiculoBd = vehiculoBd;
        }

        [HttpGet]
        public List<Vehiculo> Get()
        {
            return _vehiculoBd.Listar();
        }

        [HttpGet]
        [Route("{id}")]
        public Vehiculo Get(int id)
        {
            return _vehiculoBd.Obtener(id);
        }

        [HttpPost]
        public Vehiculo Post(Vehiculo model)
        {
            return _vehiculoBd.Insertar(model.CooperativaId, model.VehiculoPlacaVehiculo, model.VehiculoColorVehiculo, model.CreatedBy);
        }

        [HttpPut]
        [Route("{id}")]
        public Resultado Put(int id, Vehiculo model)
        {
            return _vehiculoBd.Modificar(id, model.CooperativaId, model.VehiculoPlacaVehiculo, model.VehiculoColorVehiculo, model.ModifiedBy );
        }

        [HttpDelete]
        [Route("{id}")]
        public Resultado Delete(int id)
        {
            int deletedBy = 0;
            return _vehiculoBd.Eliminar(id, deletedBy);
        }

    }
}