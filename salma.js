// variable that holds the map of the entire country 
var map;
// coordinates of Japan
var japan = {lat: 36.2048, lng: 138.2529};

// my divs are not appended to the html. WHY?

// create a Home control that returns the user to Japan
function HomeControl(controlDiv, map) {
    var controlDiv = document.createElement('div');
    controlDiv.style.padding = "5px";
    // set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Full map of Japan!';
    controlDiv.appendChild(controlUI);
    // set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Zoom Out';
    controlUI.appendChild(controlText);
 

    // set the map to the entire country with the event listener
    controlUI.addEventListener('click', function() {
        map.setCenter(japan);
    });
}

function initMap() {
    var mapDiv = document.getElementById('map');
    var myOptions = {
        zoom: 6,
        center: japan,
        // allows user to drag in/out of page with ease 
        gestureHandling: 'greedy',
        // By default, all controls disappear if the map is smaller than 200x200px. 
        // These booleans solve this issue by setting the controls to be visible at all sizes.
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
    }
    console.log(myOptions);
    map = new google.maps.Map(mapDiv, myOptions);
    console.log(map);

    // create a div to hold the control and call HomeControl()
    var homeControlDiv = document.createElement('div');
    var homeControl = new HomeControl(homeControlDiv, map);
    homeControlDiv.index = 1;
    // choose a position to place the control on the map and push the div to the array
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(homeControlDiv);

    // this variable contains the string that appears when each marker is double clicked
    var contentString = 'I am an info box!'
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Fox Village  
    var foxVillage = {lat: 38.0408, lng: 140.5304};
    // The marker, positioned at Fox Village
    var markerFox = new google.maps.Marker({position: foxVillage, map: map, label: 'Fox', title: 'click to zoom, double click to display text'});
    markerFox.addListener('dblclick', function() {
    infowindow.open(map, markerFox);
    });

    // this function allows user to click the marker in order to zoom all the way to the designated attraction
    // switch from the default roadmap view to satellite view once the marker is clicked 
    markerFox.addListener('click', function() {
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.setCenter(markerFox.getPosition());
    });

// Cat Cafe Monta
var catCafe = {lat: 35.712103, lng: 139.797998};
var markerCat = new google.maps.Marker({position: catCafe, map: map, label: "Cat"});
markerCat.addListener('click', function() {
    infowindow.open(map, markerCat);
  });
// Ginzan Onsen (hot springs)
var ginzanOnsen = {lat: 38.570436, lng: 140.530463};
var markerGinzan = new google.maps.Marker({position: ginzanOnsen, map: map, label: "Ginzan"});
markerGinzan.addListener('click', function() {
    infowindow.open(map, markerGinzan);
  });
// Kumamoto City
var kumamotoCity = {lat: 32.806203, lng: 130.705834};
var markerKumamoto = new google.maps.Marker({position: kumamotoCity, map: map, label: "Kumamoto"});
markerKumamoto.addListener('click', function() {
    infowindow.open(map, markerKumamoto);
  });
// Mount Aso 
var mtAso = {lat: 32.8985, lng: 131.0875};
var markerAso = new google.maps.Marker({position: mtAso, map: map, label: "Mt. Aso"});
markerAso.addListener('click', function() {
    infowindow.open(map, markerAso);
  });
// Ringo Onsen (hot spring with floating apples)
var ringoOnsen = {lat: 38.307737, lng: 140.161779};
new google.maps.Marker({position: ringoOnsen, map: map, label: "Ringo"});
markerAso.addListener('click', function() {
    infowindow.open(map, markerAso);
  });
// Chūson-ji Temple in Hiraizumi
var chusonTemple = {lat: 38.998685, lng: 141.108222};
var markerChuson = new google.maps.Marker({position: chusonTemple, map: map, label: "Chūson-ji"});
markerChuson.addListener('click', function() {
    infowindow.open(map, markerChuson);
  });
// Fukusenji Temple
var fukusenjiTemple = {lat: 39.372048, lng: 141.564912};
var markerFukusenji = new google.maps.Marker({position: fukusenjiTemple, map: map, label: "Fukusenji"});
markerFukusenji.addListener('click', function() {
    infowindow.open(map, markerFukusenji);
  });
// Taimadera Temple
var taimaderaTemple = {lat: 34.516110, lng: 135.694620};
var markerTaimadera = new google.maps.Marker({position: taimaderaTemple, map: map, label: "Taimadera"});
markerTaimadera.addListener('click', function() {
    infowindow.open(map, markerTaimadera);
  });
// Gotokuji Temple
var gotokujiTemple = {lat: 35.647721, lng: 139.647147};
var markerGotokuji = new google.maps.Marker({position: gotokujiTemple, map: map, label: "Gotokuji"});
markerGotokuji.addListener('click', function() {
    infowindow.open(map, markerGotokuji);
  });
// Todaiji (Great Eastern Temple)
var todaijiTemple = {lat: 34.690782, lng: 135.839457};
var markerTodaiji = new google.maps.Marker({position: todaijiTemple, map: map, label: "Todaiji"});
markerTodaiji.addListener('click', function() {
    infowindow.open(map, markerTodaiji);
  });
// Okunoshima: Rabbit Island
var rabbitIsland = {lat: 34.309905, lng: 132.993140};
var markerRabbit = new google.maps.Marker({position: rabbitIsland, map: map, label: "Rabbit"});
markerRabbit.addListener('click', function() {
    infowindow.open(map, markerRabbit);
  });
} 
// calling the function causes the "Uncaught ReferenceError: google is not defined at initMap"
// initMap();
// google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
    // An embdedded URL is used to return the map of a specific location once that location is passed through the function
    function googleMap(searchValue) {
        $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
    }
    googleMap("Fox Village, Japan");

    var googleMapVal = ["Fox Village, Japan", "Cat Cafe, Monta","Ginzan Onsen","Kumamoto City","Mount Aso","Ringo Onsen","Chuson-ji Temple, Hiraizumi","Fukusenji Temple","Taimadera Temple", "Gotokuji Temple", "Todaiji Temple","Okunoshima",];
    for (let i = 0; i < googleMapVal.length; i++) {
        googleMapValInput = googleMapVal[i];
    }

    // Place IDs
    // Fox Village
    var placeID1 = "ChIJJZKn0BJEil8RgGuHwpMQ0Ms";
    // Cat Cafe Monta
    var placeID2 = "ChIJq6oNr8aOGGAR2bpzmyJwd-Q";
    // Ginzan Onsen (hot springs)
    var placeID3 = "ChIJk563RdtdiV8R361u9kPprRs";
    // Kumamoto City
    var placeID4 = "ChIJTxvxrBT0QDURMVzPm9HOURo";
    // Mount Aso 
    var placeID5 = "ChIJ-VhChHvYQDURAxEnbeZESjc";
    // Ringo Onsen (hot spring with floating apples)
    var placeID6 = "ChIJz8RurTy5i18Ra6a00SzsZqo";
    // Chūson-ji Temple in Hiraizumi 
    var placeID7 = "ChIJO-v7ngrOiF8RPCwuq3EDEvk";
    // Fukusenji Temple
    var placeID8 = "ChIJbSWv1Nz6hV8Rwa2-4l72HP0";
    // Taimadera Temple
    var placeID9 = "ChIJt2smZRgsAWARBk1n0YviXEc";
    // Gotokuji Temple
    var placeID10 = "ChIJVVUBmZ_zGGARrEy-Ua3psAY";
    // Todaiji (Great Eastern Temple)
    var placeID11 = "ChIJ3XYIepA5AWARjzzVnT-skPg";
    // Okunoshima: Rabbit Island
    var placeID12 = "ChIJRUPQRzBFUDUR-hRMoOlnxkg";

    // URLs 
    var qURL1 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID1 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL2 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID2 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL3 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID3 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL4 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID4 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL5 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID5 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL6 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID6 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL7 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID7 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL8 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID8 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL9 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID9 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL10 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID10 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL11 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID11 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL12 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID12 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
  
    var linkArray = [qURL1, qURL2, qURL3, qURL4, qURL5, qURL6, qURL7, qURL8, qURL9, qURL10, qURL11, qURL12];
    console.log(linkArray);

    
    function googlePlaces() {
        for (let i = 0; i < linkArray.length; i++) {
            var linkURL = linkArray[i];
        }
        // ajax is currently calling qURL12 (async/synch styff?? do research)
        $.ajax({
            // Returns a pop-up on the page that confirms that the ajax call works 
            type: "GET",
            url: linkURL, 
        }).then(function(response){
            console.log(response);
            // create a function to get the user ratings key value pair.
            var totalRatingNum = response.result.user_ratings_total;
            $("#rating").append(totalRatingNum);
        });       
    }
    googlePlaces();    
});
