using ASP.NET_Core___API_Hub.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_Core___API_Hub.Controllers
{
    public class USAPopAPIController : Controller
    {
        private readonly ILogger<USAPopAPIController> _logger;

        public USAPopAPIController(ILogger<USAPopAPIController> logger)
        {
            _logger = logger;
        }

        public IActionResult USAPopulation()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
