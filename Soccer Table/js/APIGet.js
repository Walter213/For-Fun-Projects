var url = "https://v3.football.api-sports.io/standings?league=39&season=2019"
var apiKey = "6a8550db8dd75e3d8c389647e2fbd452"

fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": apiKey
	}
})
.then(response => {
	console.log(response);
	
	var data = response.json(); 
    console.log(data); 
})
.catch(err => {
	console.log(err);
});