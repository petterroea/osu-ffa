var API_KEY = "XXX";
var MATCH_ID = "XXX";
var API_ENDPOINT = "https://osu.ppy.sh/api/";

$(document).ready(function() {
	setInterval(fetchMatchData, 1000);
});
function fetchMatchData() {
	$.getJSON(API_ENDPOINT + "get_match?k=" + API_KEY + "&mp=" + MATCH_ID, function(data) {
		var match_data = data[0].match;
		console.log("Got match: " + match_data.name);
		$("#matchNameSpan").html = "<b>Match name: " + match_data.name + "</b>";
	});
}