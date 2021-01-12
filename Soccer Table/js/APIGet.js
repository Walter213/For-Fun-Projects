fetch("https://livescore-football.p.rapidapi.com/soccer/league-table?country_code=england&league_code=premier-league", 
{
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9eccd77895msh960dc937c8d11b1p1df431jsn5140ad82d728",
		"x-rapidapi-host": "livescore-football.p.rapidapi.com"
	}
})
.then(response => 
{
	console.log(response);
})
.catch(err => 
{
	console.error(err);
});