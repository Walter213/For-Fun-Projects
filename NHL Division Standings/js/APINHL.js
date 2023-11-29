// Thanks to https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md for providings these API for public use

var request = new XMLHttpRequest()

// This is old link, it seems that it was removed onto a new link, need to do some research to find out
//    the new link
request.open('GET', 'https://statsapi.web.nhl.com/api/v1/standings', true)

request.onload = function () {
	var Division = JSON.parse(this.response).records
	// console.log(Division)

	// Central Division
	var centralDivision = Division[Division.length - 2].teamRecords
	// console.log(centralDivision)

	// East Division
	var eastDivision = Division[Division.length - 3].teamRecords
	// console.log(eastDivision)

	// West Division
	var westDivision = Division[Division.length - 1].teamRecords
	// console.log(eastDivision)

	// North Division
	var northDivision = Division[Division.length - 4].teamRecords
	// console.log(eastDivision)

	// Live Time
	var liveTime = northDivision[northDivision.length - 1].lastUpdated
	console.log(liveTime)

	// Formatting the Live Time
	var date = new Date(liveTime);
	console.log(date)

	$(document).ready(function() {
		// Live Timer
		// Shows what time the tables have been updated
		$("#LiveTime").append("<p>Last Updated: " + date + "</p>");

		// Central Division
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

		// East Division
		$('#eastDivision').DataTable( {
			data: eastDivision,
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

		// West Division
		$('#westDivision').DataTable( {
			data: westDivision,
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

		// North Division
		$('#northDivision').DataTable( {
			data: northDivision,
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