﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace taxis.otavalo.web.Controllers
{
    public class ChoferController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
