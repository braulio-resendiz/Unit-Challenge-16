function sendRequest() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                displayResponseData(this.responseText);
            }
            else {
                // There was a problem with the request.
                // For example, the response may have a 404 (Not Found)
                // or 500 (Internal Server Error) response code.
            }
        }
        else {
            // Waiting for a response...
        }
    };
    httpRequest.open("GET", "http://swapi.co/api/people/", true);
    httpRequest.send();
}

function displayResponseData(data) {
    document.getElementById("output1").innerHTML = data;
}
// 88 people to put into system, http http://swapi.co/api/people/1/
function findCharacter(SWId) {
    // First get the zip code from the HTML textbox
    var character = document.getElementById(SWId).value;
    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                displayPlace(this.responseText);
            }
            else if (this.status === 404) {
                // No postal code found
                displayPlace('{ "country" : "none" }');
            }
            else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {
            // Waiting for a response...
        }
    };
    // URL for star wars character
    var url = "http://swapi.co/api/people/" + number / ;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function displayPlace(data) {
    var place = JSON.parse(data);
    if (findCharacter.people === "none") {
        document.getElementById("character").className = "alert alert-warning";
        document.getElementById("character").innerHTML = "Not in our records"
    }
    else {
        document.getElementById("character").className = "alert alert-success";
        document.getElementById("character").innerHTML = findCharacter.people[0]["character name"] + ", " + findCharacter.people[0] + ", " + findCharacter.people;
    }
}
