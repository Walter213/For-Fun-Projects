var request = new XMLHttpRequest()

request.open('GET', 'https://statsapi.web.nhl.com/api/v1/standings', true)

request.onload = function () {
	var data = JSON.parse(this.response)
	console.log(data);
}

request.send()