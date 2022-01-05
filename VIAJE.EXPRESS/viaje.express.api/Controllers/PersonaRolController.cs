using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using viaje.express.data;
using viaje.express.model;


namespace viaje.express.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonaRolController : ControllerBase
    {

        private readonly PersonaRolBd _personaRolBd;
        private readonly ILogger<PersonaRolController> _logger;


        public PersonaRolController(ILogger<PersonaRolController> logger,PersonaRolBd personaRolBd)
        {
            _logger = logger;
            _personaRolBd = personaRolBd;
        }





        [HttpGet]
        public List<PersonaRol> Get()
        {
            return _personaRolBd.Listar();
        }

        [HttpGet]
        [Route("{id}")]
        public PersonaRol Get(int id)
        {
            return _personaRolBd.Obtener(id);
        }

        [HttpPost]
        public PersonaRol Post(PersonaRol model)
        {
            return _personaRolBd.Insertar(model.PersonaId, model.PersonaRolId, model.EstadoPersonaId,model.CreatedBy);
        }

    }
}
