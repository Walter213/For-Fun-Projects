// Thanks to https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md for providings these API for public use

var request = new XMLHttpRequest()

request.open('GET', 'https://statsapi.web.nhl.com/api/v1/standings', true)

request.onload = function () {
	var Division = JSON.parse(this.response).records
	console.log(Division)

	var centralDivision = Division[Division.length - 1].teamRecords
	console.log(centralDivision)

	$(document).ready(function() {
		$('#centralDivision').DataTable( {
			data: centralDivision,
			columns: [
				{ data : "team.name" },
				{ data : "gamesPlayed"},
				{ data : "leagueRecord.wins"},
				{ data : "leagueRecord.losses"},
				{ data : "leagueRecord.ot"},
				{ data : "points"},
				{ data : "goalsScored"},
				{ data : "goalsAgainst"},
				{ data : null,
				  render: function(data, type, row) {
					return data.goalsScored - data.goalsAgainst
				  }
				},
				{ data : "streak.streakCode"}
			],
			order: [[ 5, "desc" ]],
			initComplete: function (settings, json) {
				this.api().columns().header().each(function (th) {
					$(th).removeClass("sorting_asc");
					$(th).removeClass("sorting_desc");
					$(th).removeClass("sorting");
				}
			 )
			},
			bSort: false,
			bAutoWidth: true,
			bPaginate: false,
			bInfo : false,
			bFilter : false,
			responsive: true
		} );
	} );
}

request.send()