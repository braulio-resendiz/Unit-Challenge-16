function findCharacter(SW) {
    var SWId = document.getElementById(SW).value;
    // First get the zip code from the HTML textbox
    console.log("SWId = " + SWId);
    //var character = document.getElementById("SWId").value;
    //console.log("character = " + character);
    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                console.log(this.responseText);
                displaySWData(this.responseText);
            } else if (this.status === 404) {
                // No postal code found
                //displayPlace('{ "country" : "none" }');
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    // URL for star wars character
    var url = "http://swapi.co/api/people/" + SWId;
    console.log("url =" + url);
    httpRequest.open("GET", url, true);
    httpRequest.send();
    //var output = document.getElementById('output');
    //output.innerHTML = 'lol';
}

function displaySWData(data) {
    var SWData = JSON.parse(data);
    document.getElementById('output');
    output.innerHTML = "Name: " + SWData.name + "</br>" + "Height(ft): " + (Math.round(SWData.height / 2.54 / 12 * 10) / 10) + "</br>" + "Weight(lb): " + Math.round(SWData.mass * 2.20462) + "</br>" + "Hair Color: " + SWData.hair_color + "</br>" + "Skin Color: " + SWData.skin_color + "</br>" + "Eye Color: " + SWData.eye_color + "</br>" + "Birth Year: " + SWData.birth_year + "</br>" + "Gender: " + SWData.gender;
    HomeworldData(SWData.homeworld);
    SpeciesData(SWData.species);
};

function displayHomeworldData(data) {
    var HomeworldData = JSON.parse(data);
    document.getElementById('HomeworldOutput');
    HomeworldOutput.innerHTML = "Homeworld: " + HomeworldData.name;
};


function HomeworldData(url) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                console.log(this.responseText);
                displayHomeworldData(this.responseText);
            } else if (this.status === 404) {
                // No postal code found
                //displayPlace('{ "country" : "none" }');
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    console.log("url =" + url);
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function displaySpeciesData(data) {
    var SpeciesData = JSON.parse(data);
    document.getElementById('SpeciesOutput');
    SpeciesOutput.innerHTML = "Species: " + SpeciesData.name;
};

function SpeciesData(url) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                console.log(this.responseText);
                displaySpeciesData(this.responseText);
            } else if (this.status === 404) {
                // No postal code found
                //displayPlace('{ "country" : "none" }');
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    console.log("url =" + url);
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function displayPlace(data) {
    var place = JSON.parse(data);
    if (findCharacter.people === "none") {
        document.getElementById("character").className = "alert alert-warning";
        document.getElementById("character").innerHTML = "Not in our records"
    } else {
        document.getElementById("character").className = "alert alert-success";
        document.getElementById("character").innerHTML = findCharacter.people[0]["character name"] + ", " + findCharacter.people[0] + ", " + findCharacter.people;
    }
}
