using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_Core___API_Hub.Models
{
    public class TopRatingMovie
    {
        public bool Adult { get; set; }

        public string BackdropPath { get; set; }

        public int[] GenreIDs { get; set; }

        public int ID { get; set; }

        public string OriginalLanguage { get; set; }

        public string OriginalTitle { get; set; }

        public string Overview { get; set; }

        public int Popularity { get; set; }

        public string PosterPath { get; set; }

        public string ReleaseDate { get; set; }

        public string Title { get; set; }

        public bool Video { get; set; }

        public int Vote_Average { get; set; }

        public int Vote_Count { get; set; }

        // title, poster_path, overview(read expansion), release_date, popularity/vote_count/vote_average
    }
}
