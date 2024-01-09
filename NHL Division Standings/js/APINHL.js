// Thanks to https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md for providings these API for public use

var request = new XMLHttpRequest()
request.getAllResponseHeaders();
request.withCredentials = true;

// https://gitlab.com/dword4/nhlapi/-/blob/master/new-api.md for more API and Info

var date = new Date();
var Year = date.getFullYear();
var Month = date.getMonth() + 1;
var Day = date.getDate();

if (Month < 10)
{
	Month = '0' + Month
}

if (Day < 10)
{
	Day = '0' + Day
}

var liveTime = Year + '-' + Month + '-' + Day 

// Access-Control-Allow-Origin: 

var URL = 'https://api-web.nhle.com/v1/standings/' + liveTime

request.open('GET', URL, true)

request.onload = function () {
	var Division = JSON.parse(this.response).records
	console.log(Division)

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

	// // Live Time
	// var liveTime = northDivision[northDivision.length - 1].lastUpdated
	// console.log(liveTime)

	// // Formatting the Live Time
	// var date = new Date(liveTime);
	// console.log(date)

	$(document).ready(function() {
		// Live Timer
		// Shows what time the tables have been updated
		$("#LiveTime").append("<p>Last Updated: " + liveTime + "</p>");

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