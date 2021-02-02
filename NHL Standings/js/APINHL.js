// Thanks to https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md for providings these API for public use

var request = new XMLHttpRequest()

request.open('GET', 'https://statsapi.web.nhl.com/api/v1/standings', true)

request.onload = function () {
	var Division = JSON.parse(this.response)
	// console.log(Division)

	var DivisionRecords = Division.records
	console.log(DivisionRecords)

	$(document).ready(function() {
		$('#centralDivision').DataTable( {
			data: DivisionRecords,
			columns: [
				{ data : "teamRecords.0.divisionRank" },
				{ data : "teamRecords.0.team.name" }
			],
			columnDefs: [
			],
			bPaginate: false,
			bInfo : false,
			bFilter : false
		} );
	} );
}

request.send()