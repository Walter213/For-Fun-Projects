using ASP.NET_Core___API_Hub.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_Core___API_Hub.Controllers
{
    public class MovieAPIController : Controller
    {
        private readonly ILogger<MovieAPIController> _logger;

        public MovieAPIController(ILogger<MovieAPIController> logger)
        {
            _logger = logger;
        }

        public IActionResult TopRatedMovies()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public async Task<IActionResult> Index()
        {
            List<TopRatingMovieModel> AllTopRatedMovies = new List<TopRatingMovieModel>();

            var options = new RestClientOptions("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1");
            var client = new RestClient(options);
            var request = new RestRequest("");
            request.AddHeader("accept", "application/json");
            request.AddHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2VhMTkxYmRlMjc3NjQwMGU3NWZlYTFiODFkMjQ2NiIsInN1YiI6IjY2MDI3ZmExMTk3ZGU0MDE4NjFjNGNlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnW2nRd-M9Z78ts0NKwza6_yyNbOIZ5sSB8-M0GNP5g");
            var response = await client.GetAsync(request);

            if (response.IsSuccessStatusCode)
            {
                string[] data = response.Content.Split(',', ':');

                // Crashes here because i have not sorted the data since it is a little difficult due to the array
                // AllTopRatedMovies = data;
            }
            else
            {
                Console.WriteLine("Error calling Web API");
            }

            return View();
        }
    }
}
