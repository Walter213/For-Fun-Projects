// Thanks to https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md for providings these API for public use

var request = new XMLHttpRequest()

request.open('GET', 'https://statsapi.web.nhl.com/api/v1/standings', true)

request.onload = function () {
	var Division = JSON.parse(this.response)
	// console.log(Division)

	var DivisionRecords = Division.records
	console.log(DivisionRecords)

	// var DivisionTeamRecords = DivisionRecords.t
	// console.log(DivisionTeamRecords)

	$(document).ready(function() {
		$('#centralDivision').DataTable( {
			data: Division,
			columns: [
				{ Division : "standingsType" }
			],
			bPaginate: false,
			bInfo : false,
			bFilter : false
		} );
	} );
}

request.send()