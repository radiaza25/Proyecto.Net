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
    public class UsuarioController : ControllerBase
    {

        private readonly ILogger<UsuarioController> _logger;
        private readonly UsuarioBd _usuarioBd;

        public UsuarioController(ILogger<UsuarioController> logger, UsuarioBd usuarioBd)
        {
            _logger = logger;
            _usuarioBd = usuarioBd;
        }

        [HttpGet]
        public List<Usuario> Get()
        {
            return _usuarioBd.Listar();
        }

        [HttpGet]
        [Route("{id}")]
        public Usuario Get(int id)
        {
            return _usuarioBd.Obtener(id);
        }

       
       
        [HttpPost]
        public Usuario Post(Usuario model)
        {
            return _usuarioBd.Insertar(model.Cedula, model.Nombre, model.Apellido, model.CreatedBy);
        }

        [HttpPut]
        [Route("{id}")]
        public Resultado Put(int id, Usuario model)
        {
            return _usuarioBd.Modificar(id, model.Cedula, model.Nombre, model.Apellido, model.ModifiedBy);
        }

        [HttpDelete]
        [Route("{id}")]
        public Resultado Delete(int id)
        {
            int deletedBy = 1;
            return _usuarioBd.Eliminar(id, deletedBy);
        }

    }
}
