using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_Core___API_Hub.Models
{
    public class TopRatingMovieModel
    {
        public int page { get; set; }

        public string[] results { get; set; } // array of object from TopRatingMovie

        public int total_pages { get; set; }

        public int total_results { get; set; }
    }
}
