using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace taxis.otavalo.web.Controllers
{
    public class UbicacionController : Controller
    {
        public IActionResult Ubicacion()
        {
            return View();
        }
    }
}
