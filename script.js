// variable that holds the map of the entire country 
var map;
// coordinates of Japan
var japan = {lat: 36.2048, lng: 138.2529};

function initMap() {
    var mapDiv = document.getElementById('map');
    var myOptions = {
        zoom: 5,
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

    // this variable contains the string that appears when each marker is mousedOver
    var contentString = ['Kumamoto - 740,822','Okinawa - 1.4mil','Ishinomaki - 147,214','Totorri - 193,717','Imabari - 158,114','Shiroishi - 33,330','Saga - 813,590', 'Rabbit Island!']
    for (let i = 0; i < contentString.length; i++) {
        var KumamotoString = contentString[0];
        var okinawaString = contentString[1];
        var ishinomakiString = contentString[2];
        var totorriString = contentString[3];
        var imabariString = contentString[4];
        var shiroishiString = contentString[5];
        var sagaString = contentString[6];
        var rabbitString = contentString[7];
    }
    var infowindow = new google.maps.InfoWindow({
        content: KumamotoString
    });
    var infowindowTwo = new google.maps.InfoWindow({
        content: okinawaString
    });
    var infowindowThree = new google.maps.InfoWindow({
        content: ishinomakiString
    });
    var infowindowFour = new google.maps.InfoWindow({
        content: totorriString
    });
    var infowindowFive = new google.maps.InfoWindow({
        content: imabariString
    });
    var infowindowSix = new google.maps.InfoWindow({
        content: shiroishiString
    });
    var infowindowSeven = new google.maps.InfoWindow({
        content: sagaString
    });
    var infowindowEight = new google.maps.InfoWindow({
        content: rabbitString
    });
    
    
    // Kumamoto  
    var kumamoto = {lat: 32.8032, lng: 130.7079};
    // The marker, positioned at Kumamoto
    var markerKumamoto = new google.maps.Marker({position: kumamoto, map: map, title: 'click to zoom, double click to display text'});
    markerKumamoto.addListener('mouseover', function() {
    infowindow.open(map, markerKumamoto);
    });
    // this function allows user to click the marker in order to zoom all the way to the designated attraction
    // switch from the default roadmap view to satellite view once the marker is clicked 
    markerKumamoto.addListener('click', function() {
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.setCenter(markerKumamoto.getPosition());
    });
    // Okinawa City
    var okinawa = {lat: 26.3344, lng: 127.8056};
    var markerOkinawa = new google.maps.Marker({position: okinawa, map: map, title: 'click to zoom, double click to display text'});
    markerOkinawa.addListener('mouseover', function() {
        infowindowTwo.open(map, markerOkinawa);
    });
    markerOkinawa.addListener('click', function() {
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.setCenter(markerOkinawa.getPosition());
    });
    // Ishinomaki
    var ishinomaki = {lat: 38.4343, lng: 141.3029};
    var markerIshinomaki = new google.maps.Marker({position: ishinomaki, map: map, title: 'click to zoom, double click to display text'});
    markerIshinomaki.addListener('mouseover', function() {
        infowindowThree.open(map, markerIshinomaki);
    });
    markerIshinomaki.addListener('click', function() {
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.setCenter(markerIshinomaki.getPosition());
    });
    // Tottori
    var totorri = {lat: 35.5011, lng: 134.2351};
    var markerTotorri = new google.maps.Marker({position: totorri, map: map, title: 'click to zoom, double click to display text'});
    markerTotorri.addListener('mouseover', function() {
        infowindowFour.open(map, markerTotorri);
    });
    markerTotorri.addListener('click', function() {
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.setCenter(markerTotorri.getPosition());
    });
    // Imabari
    var imabari = {lat: 34.0662, lng: 132.9978};
    var markerImabari = new google.maps.Marker({position: imabari, map: map, title: 'click to zoom, double click to display text'});
    markerImabari.addListener('mouseover', function() {
        infowindowFive.open(map, markerImabari);
    });
    markerImabari.addListener('click', function() {
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.setCenter(markerImabari.getPosition());
    });
    // Shiroishi
    var shiroishi = {lat: 38.0023, lng: 140.6200};
    var markerShiroishi = new google.maps.Marker({position: shiroishi, map: map, title: 'click to zoom, double click to display text'});
    markerShiroishi.addListener('mouseover', function() {
        infowindowSix.open(map, markerShiroishi);
    });
    markerShiroishi.addListener('click', function() {
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.setCenter(markerShiroishi.getPosition());
    });
    // Saga
    var saga = {lat: 33.2631, lng: 130.3009};
    var markerSaga = new google.maps.Marker({position: saga, map: map, title: 'click to zoom, double click to display text'});
    markerSaga.addListener('mouseover', function() {
        infowindowSeven.open(map, markerSaga);
    });
    markerSaga.addListener('click', function() {
        map.setZoom(19);
        map.setMapTypeId('satellite');
        map.setCenter(markerSaga.getPosition());
    });
    

// Place IDs
    // Fox Village
    var placeID1 = "ChIJJZKn0BJEil8RgGuHwpMQ0Ms";
    // Cape Zanpa Lighthouse
    var placeID2 = "ChIJ71RebUgX5TQRInS09WnHs8Q";
    // Hiyoriama Park
    var placeID3 = "ChIJjR3hnFyjiV8RntcTqKj-eio";
    // Pokapoka Onsen
    var placeID4 = "ChIJ72s-LiqOVTUR86E14EQzB58";
    // Mount Aso 
    var placeID5 = "ChIJ-VhChHvYQDURAxEnbeZESjc";
    // Imabari Castle
    var placeID6 = "ChIJMwKYmmU6UDURLg1gq7wGDyk";
    // Yoshinogari Historical Park
    var placeID7 = "ChIJX-D2_AG6QTURNFKdK0BI3Vk";

   

// URLs 
var linkArray = [qURL1, qURL2, qURL3, qURL4, qURL5, qURL6, qURL7];
    var qURL1 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID1 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL2 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID2 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL3 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID3 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL4 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID4 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL5 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID5 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL6 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID6 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    var qURL7 = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +  placeID7 + "&fields=user_ratings_total,place_id&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";
    
// for Shiroishi marker 
markerShiroishi.addListener('dblclick', function() {
$(document).ready(function(){
    // An embdedded URL is used to return the map of a specific location once that location is passed through the function
    function foxVillage(searchValue) {
        $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
    }
    foxVillage("Fox Village, Japan");

    function advice() {
        $.ajax({
            // Returns a pop-up on the page that confirms that the ajax call works 
            type: "GET",
            url: qURL1, 
        }).then(function(response){
            console.log(response);
            // create a function to get the user ratings key value pair.
            // var totalRatingNum = response.result.user_ratings_total;
            // $("#rating").append(totalRatingNum);
        var adviceMessage = $("#testbox").text("Travel Advice: " + response.result.user_ratings_total);
        if (response.result.user_ratings_total < 1000) {
            adviceMessage.text("Extremly low density have fun");
            adviceMessage.css({"font-weight":"bold", "color":"blue"});
        } else if (response.result.user_ratings_total > 1000 && response.result.user_ratings_total < 2000) {
            adviceMessage.text("Moderate density, use caution")
            adviceMessage.css({"font-weight":"bold", "color":"gray"});
        } else if (response.result.user_ratings_total > 2000 && response.result.user_ratings_total < 3000) {
            adviceMessage.text("Alert: Moderate travel pedestrain density; use caution and social distance");
            adviceMessage.css({"font-weight": "bold" ,"color": "gray"});
        } else {
            adviceMessage.text("Alert: high travel density zone use caution and face mask. ");
            adviceMessage.css({"font-weight":"bold", "color":"red"});
        }
        $("#testbox").append(adviceMessage);
    });
    
    }
    advice();

    function renderRestaurant(){
        var coordinates = ["32.8032,130.7079","26.3344,127.8056","38.4343,141.3029","35.5011,134.2351","34.0662,132.9978","38.0023,140.6200","33.2631,130.3009","34.309905,132.993140}"];
        for (var i = 0; i < coordinates.length; i++) {
        var restaurantURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ coordinates[5] +"&radius=1500&type=restaurant&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";  
        }
        
        $.ajax({
            url: restaurantURL,
            method: "GET",
        }).then(function(response){
        console.log(response);
        // var testDiv = $("<div>");
        for (let i = 15; i < response.results.length; i++) {
        
        var names = response.results[i].name;
        var rating = response.results[i].rating;
        
        var text = $("<p>").text(names);
        $("#restaurant").append(text);
    
        var text = $("<p>").text(rating);
        $("#restaurant").append(text);
        
        console.log(names);  
    }
    }
    )};
    renderRestaurant();
    function searchWeather() {
        // run ajax to call the openWeatherMap API
        $.ajax({
          type: "GET",
          // place api url with api key
          url: "https://api.openweathermap.org/data/2.5/weather?q=Shiroishi&APPID=e2c03ac7234f936970a5f955100e4c06&units=imperial",
          dataType: "json",
          success: function(data) {
            var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
            var card = $("<div>").addClass("card");
            var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
            var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
            var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
            var cardBody = $("<div>").addClass("card-body");
            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            title.append(img);
            cardBody.append(title, temp, humid, wind);
            card.append(cardBody);
            $("#weather").append(card);
        
          }
        });
      }
      searchWeather();
});
});

// For Okinawa marker
markerOkinawa.addListener('dblclick', function() {
    $(document).ready(function(){
        // An embdedded URL is used to return the map of a specific location once that location is passed through the function
        function capeZanpa(searchValue) {
            $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
        }
        capeZanpa("Cape Zanpa Lighthouse, Japan");
    
        function advice() {
            $.ajax({
                // Returns a pop-up on the page that confirms that the ajax call works 
                type: "GET",
                url: qURL2, 
            }).then(function(response){
                console.log(response);
                // create a function to get the user ratings key value pair.
                // var totalRatingNum = response.result.user_ratings_total;
                // $("#rating").append(totalRatingNum);
            var adviceMessage = $("#testbox").text("Travel Advice: " + response.result.user_ratings_total);
            if (response.result.user_ratings_total < 1000) {
                adviceMessage.text("Extremly low density have fun");
                adviceMessage.css({"font-weight":"bold", "color":"blue"});
            } else if (response.result.user_ratings_total > 1000 && response.result.user_ratings_total < 2000) {
                adviceMessage.text("Moderate density, use caution")
                adviceMessage.css({"font-weight":"bold", "color":"gray"});
            } else if (response.result.user_ratings_total > 2000 && response.result.user_ratings_total < 3000) {
                adviceMessage.text("Alert: Moderate travel pedestrain density; use caution and social distance");
                adviceMessage.css({"font-weight": "bold" ,"color": "gray"});
            } else {
                adviceMessage.text("Alert: high travel density zone use caution and face mask. ");
                adviceMessage.css({"font-weight":"bold", "color":"red"});
            }
            $("#testbox").append(adviceMessage);
        });
        
        }
        advice();
    
        function renderRestaurant(){
            var coordinates = ["32.8032,130.7079","26.3344,127.8056","38.4343,141.3029","35.5011,134.2351","34.0662,132.9978","38.0023,140.6200","33.2631,130.3009","34.309905,132.993140}"];
            for (var i = 0; i < coordinates.length; i++) {
            var restaurantURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ coordinates[1] +"&radius=1500&type=restaurant&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";  
            }
            
            $.ajax({
                url: restaurantURL,
                method: "GET",
            }).then(function(response){
            console.log(response);
            // var testDiv = $("<div>");
            for (let i = 15; i < response.results.length; i++) {
            
            var names = response.results[i].name;
            var rating = response.results[i].rating;
            
            var text = $("<p>").text(names);
            $("#restaurant").append(text);
        
            var text = $("<p>").text(rating);
            $("#restaurant").append(text);
            
            console.log(names);  
        }
        }
        )};
            renderRestaurant();
            function searchWeather() {
                // run ajax to call the openWeatherMap API
                $.ajax({
                  type: "GET",
                  // place api url with api key
                  url: "https://api.openweathermap.org/data/2.5/weather?q=Okinawa&APPID=e2c03ac7234f936970a5f955100e4c06&units=imperial",
                  dataType: "json",
                  success: function(data) {
                    var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                    var card = $("<div>").addClass("card");
                    var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
                    var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                    var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
                    var cardBody = $("<div>").addClass("card-body");
                    var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                    title.append(img);
                    cardBody.append(title, temp, humid, wind);
                    card.append(cardBody);
                    $("#weather").append(card);
                
                  }
                });
              }
            searchWeather();
    });
    });

// For Ishinomaki marker
markerIshinomaki.addListener('dblclick', function() {
    $(document).ready(function(){
        // An embdedded URL is used to return the map of a specific location once that location is passed through the function
        function hiyoPark(searchValue) {
            $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
        }
        hiyoPark("Hiyoriama Park, Japan");
    
        function advice() {
            $.ajax({
                // Returns a pop-up on the page that confirms that the ajax call works 
                type: "GET",
                url: qURL3, 
            }).then(function(response){
                console.log(response);
                // create a function to get the user ratings key value pair.
                // var totalRatingNum = response.result.user_ratings_total;
                // $("#rating").append(totalRatingNum);
            var adviceMessage = $("#testbox").text("Travel Advice: " + response.result.user_ratings_total);
            if (response.result.user_ratings_total < 1000) {
                adviceMessage.text("Extremly low density have fun");
                adviceMessage.css({"font-weight":"bold", "color":"blue"});
            } else if (response.result.user_ratings_total > 1000 && response.result.user_ratings_total < 2000) {
                adviceMessage.text("Moderate density, use caution")
                adviceMessage.css({"font-weight":"bold", "color":"gray"});
            } else if (response.result.user_ratings_total > 2000 && response.result.user_ratings_total < 3000) {
                adviceMessage.text("Alert: Moderate travel pedestrain density; use caution and social distance");
                adviceMessage.css({"font-weight": "bold" ,"color": "gray"});
            } else {
                adviceMessage.text("Alert: high travel density zone use caution and face mask. ");
                adviceMessage.css({"font-weight":"bold", "color":"red"});
            }
            $("#testbox").append(adviceMessage);
        });
        
        }
        advice();
    
        function renderRestaurant(){
            var coordinates = ["32.8032,130.7079","26.3344,127.8056","38.4343,141.3029","35.5011,134.2351","34.0662,132.9978","38.0023,140.6200","33.2631,130.3009","34.309905,132.993140}"];
            for (var i = 0; i < coordinates.length; i++) {
            var restaurantURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ coordinates[2] +"&radius=1500&type=restaurant&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";  
            }
            
            $.ajax({
                url: restaurantURL,
                method: "GET",
            }).then(function(response){
            console.log(response);
            // var testDiv = $("<div>");
            for (let i = 15; i < response.results.length; i++) {
            
            var names = response.results[i].name;
            var rating = response.results[i].rating;
            
            var text = $("<p>").text(names);
            $("#restaurant").append(text);
        
            var text = $("<p>").text(rating);
            $("#restaurant").append(text);
            
            console.log(names);  
        }
        }
        )};
            renderRestaurant();
            function searchWeather() {
                // run ajax to call the openWeatherMap API
                $.ajax({
                  type: "GET",
                  // place api url with api key
                  url: "https://api.openweathermap.org/data/2.5/weather?q=Ishinomaki&APPID=e2c03ac7234f936970a5f955100e4c06&units=imperial",
                  dataType: "json",
                  success: function(data) {
                    var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                    var card = $("<div>").addClass("card");
                    var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
                    var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                    var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
                    var cardBody = $("<div>").addClass("card-body");
                    var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                    title.append(img);
                    cardBody.append(title, temp, humid, wind);
                    card.append(cardBody);
                    $("#weather").append(card);
                
                  }
                });
              }
            searchWeather();
    });
    });

// For Tottori marker
markerTotorri.addListener('dblclick', function() {
    $(document).ready(function(){
        // An embdedded URL is used to return the map of a specific location once that location is passed through the function
        function pokapoka(searchValue) {
            $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
        }
        pokapoka("Tottori Pokapoka Hot Spring, Japan");
    
        function advice() {
            $.ajax({
                // Returns a pop-up on the page that confirms that the ajax call works 
                type: "GET",
                url: qURL4, 
            }).then(function(response){
                console.log(response);
                // create a function to get the user ratings key value pair.
                // var totalRatingNum = response.result.user_ratings_total;
                // $("#rating").append(totalRatingNum);
            var adviceMessage = $("#testbox").text("Travel Advice: " + response.result.user_ratings_total);
            if (response.result.user_ratings_total < 1000) {
                adviceMessage.text("Extremly low density have fun");
                adviceMessage.css({"font-weight":"bold", "color":"blue"});
            } else if (response.result.user_ratings_total > 1000 && response.result.user_ratings_total < 2000) {
                adviceMessage.text("Moderate density, use caution")
                adviceMessage.css({"font-weight":"bold", "color":"gray"});
            } else if (response.result.user_ratings_total > 2000 && response.result.user_ratings_total < 3000) {
                adviceMessage.text("Alert: Moderate travel pedestrain density; use caution and social distance");
                adviceMessage.css({"font-weight": "bold" ,"color": "gray"});
            } else {
                adviceMessage.text("Alert: high travel density zone use caution and face mask. ");
                adviceMessage.css({"font-weight":"bold", "color":"red"});
            }
            $("#testbox").append(adviceMessage);
        });
        
        }
        advice();
    
        function renderRestaurant(){
            var coordinates = ["32.8032,130.7079","26.3344,127.8056","38.4343,141.3029","35.5011,134.2351","34.0662,132.9978","38.0023,140.6200","33.2631,130.3009","34.309905,132.993140}"];
            for (var i = 0; i < coordinates.length; i++) {
            var restaurantURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ coordinates[3] +"&radius=1500&type=restaurant&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";  
            }
            
            $.ajax({
                url: restaurantURL,
                method: "GET",
            }).then(function(response){
            console.log(response);
            // var testDiv = $("<div>");
            for (let i = 15; i < response.results.length; i++) {
            
            var names = response.results[i].name;
            var rating = response.results[i].rating;
            
            var text = $("<p>").text(names);
            $("#restaurant").append(text);
        
            var text = $("<p>").text(rating);
            $("#restaurant").append(text);
            
            console.log(names);  
        }
        }
        )};
            renderRestaurant();
            function searchWeather() {
                // run ajax to call the openWeatherMap API
                $.ajax({
                  type: "GET",
                  // place api url with api key
                  url: "https://api.openweathermap.org/data/2.5/weather?q=Tottori&APPID=e2c03ac7234f936970a5f955100e4c06&units=imperial",
                  dataType: "json",
                  success: function(data) {
                    var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                    var card = $("<div>").addClass("card");
                    var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
                    var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                    var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
                    var cardBody = $("<div>").addClass("card-body");
                    var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                    title.append(img);
                    cardBody.append(title, temp, humid, wind);
                    card.append(cardBody);
                    $("#weather").append(card);
                
                  }
                });
              }
            searchWeather();
    });
    });

// For Kumamoto marker
markerKumamoto.addListener('dblclick', function() {
    $(document).ready(function(){
        // An embdedded URL is used to return the map of a specific location once that location is passed through the function
        function mtAso(searchValue) {
            $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
        }
        mtAso("Mount Aso, Japan");
    
        function advice() {
            $.ajax({
                // Returns a pop-up on the page that confirms that the ajax call works 
                type: "GET",
                url: qURL5, 
            }).then(function(response){
                console.log(response);
                // create a function to get the user ratings key value pair.
                // var totalRatingNum = response.result.user_ratings_total;
                // $("#rating").append(totalRatingNum);
            var adviceMessage = $("#testbox").text("Travel Advice: " + response.result.user_ratings_total);
            if (response.result.user_ratings_total < 1000) {
                adviceMessage.text("Extremly low density have fun");
                adviceMessage.css({"font-weight":"bold", "color":"blue"});
            } else if (response.result.user_ratings_total > 1000 && response.result.user_ratings_total < 2000) {
                adviceMessage.text("Moderate density, use caution")
                adviceMessage.css({"font-weight":"bold", "color":"gray"});
            } else if (response.result.user_ratings_total > 2000 && response.result.user_ratings_total < 3000) {
                adviceMessage.text("Alert: Moderate travel pedestrain density; use caution and social distance");
                adviceMessage.css({"font-weight": "bold" ,"color": "gray"});
            } else {
                adviceMessage.text("Alert: high travel density zone use caution and face mask. ");
                adviceMessage.css({"font-weight":"bold", "color":"red"});
            }
            $("#testbox").append(adviceMessage);
        });
        
        }
        advice();
    
        function renderRestaurant(){
            var coordinates = ["32.8032,130.7079","26.3344,127.8056","38.4343,141.3029","35.5011,134.2351","34.0662,132.9978","38.0023,140.6200","33.2631,130.3009","34.309905,132.993140}"];
            for (var i = 0; i < coordinates.length; i++) {
            var restaurantURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ coordinates[0] +"&radius=1500&type=restaurant&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";  
            }
            
            $.ajax({
                url: restaurantURL,
                method: "GET",
            }).then(function(response){
            console.log(response);
            // var testDiv = $("<div>");
            for (let i = 15; i < response.results.length; i++) {
            
            var names = response.results[i].name;
            var rating = response.results[i].rating;
            
            var text = $("<p>").text(names);
            $("#restaurant").append(text);
        
            var text = $("<p>").text(rating);
            $("#restaurant").append(text);
            
            console.log(names);  
        }
        }
        )};
            renderRestaurant();
            function searchWeather() {
                // run ajax to call the openWeatherMap API
                $.ajax({
                  type: "GET",
                  // place api url with api key
                  url: "https://api.openweathermap.org/data/2.5/weather?q=Kumamoto&APPID=e2c03ac7234f936970a5f955100e4c06&units=imperial",
                  dataType: "json",
                  success: function(data) {
                    var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                    var card = $("<div>").addClass("card");
                    var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
                    var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                    var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
                    var cardBody = $("<div>").addClass("card-body");
                    var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                    title.append(img);
                    cardBody.append(title, temp, humid, wind);
                    card.append(cardBody);
                    $("#weather").append(card);
                
                  }
                });
              }
            searchWeather();
    });
    });

// For Imabari marker
markerImabari.addListener('dblclick', function() {
    $(document).ready(function(){
        // An embdedded URL is used to return the map of a specific location once that location is passed through the function
        function imaCastle(searchValue) {
            $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
        }
        imaCastle("Imabari Castle, Japan");
    
        function advice() {
            $.ajax({
                // Returns a pop-up on the page that confirms that the ajax call works 
                type: "GET",
                url: qURL6, 
            }).then(function(response){
                console.log(response);
                // create a function to get the user ratings key value pair.
                // var totalRatingNum = response.result.user_ratings_total;
                // $("#rating").append(totalRatingNum);
            var adviceMessage = $("#testbox").text("Travel Advice: " + response.result.user_ratings_total);
            if (response.result.user_ratings_total < 1000) {
                adviceMessage.text("Extremly low density have fun");
                adviceMessage.css({"font-weight":"bold", "color":"blue"});
            } else if (response.result.user_ratings_total > 1000 && response.result.user_ratings_total < 2000) {
                adviceMessage.text("Moderate density, use caution")
                adviceMessage.css({"font-weight":"bold", "color":"gray"});
            } else if (response.result.user_ratings_total > 2000 && response.result.user_ratings_total < 3000) {
                adviceMessage.text("Alert: Moderate travel pedestrain density; use caution and social distance");
                adviceMessage.css({"font-weight": "bold" ,"color": "gray"});
            } else {
                adviceMessage.text("Alert: high travel density zone use caution and face mask. ");
                adviceMessage.css({"font-weight":"bold", "color":"red"});
            }
            $("#testbox").append(adviceMessage);
        });
        
        }
        advice();
    
        function renderRestaurant(){
            var coordinates = ["32.8032,130.7079","26.3344,127.8056","38.4343,141.3029","35.5011,134.2351","34.0662,132.9978","38.0023,140.6200","33.2631,130.3009","34.309905,132.993140}"];
            for (var i = 0; i < coordinates.length; i++) {
            var restaurantURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ coordinates[4] +"&radius=1500&type=restaurant&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";  
            }
            
            $.ajax({
                url: restaurantURL,
                method: "GET",
            }).then(function(response){
            console.log(response);
            // var testDiv = $("<div>");
            for (let i = 15; i < response.results.length; i++) {
            
            var names = response.results[i].name;
            var rating = response.results[i].rating;
            
            var text = $("<p>").text(names);
            $("#restaurant").append(text);
        
            var text = $("<p>").text(rating);
            $("#restaurant").append(text);
            
            console.log(names);  
        }
        }
        )};
            renderRestaurant();
            function searchWeather() {
                // run ajax to call the openWeatherMap API
                $.ajax({
                  type: "GET",
                  // place api url with api key
                  url: "https://api.openweathermap.org/data/2.5/weather?q=Ehime&APPID=e2c03ac7234f936970a5f955100e4c06&units=imperial",
                  dataType: "json",
                  success: function(data) {
                    var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                    var card = $("<div>").addClass("card");
                    var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
                    var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                    var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
                    var cardBody = $("<div>").addClass("card-body");
                    var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                    title.append(img);
                    cardBody.append(title, temp, humid, wind);
                    card.append(cardBody);
                    $("#weather").append(card);
                
                  }
                });
              }
            searchWeather();
    });
    });

// For Saga marker
markerSaga.addListener('dblclick', function() {
    $(document).ready(function(){
        // An embdedded URL is used to return the map of a specific location once that location is passed through the function
        function yoshiPark(searchValue) {
            $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
        }
        yoshiPark("Yoshinogari Historical Park, Japan");
    
        function advice() {
            $.ajax({
                // Returns a pop-up on the page that confirms that the ajax call works 
                type: "GET",
                url: qURL7, 
            }).then(function(response){
                console.log(response);
                // create a function to get the user ratings key value pair.
                // var totalRatingNum = response.result.user_ratings_total;
                // $("#rating").append(totalRatingNum);
            var adviceMessage = $("#testbox").text("Travel Advice: " + response.result.user_ratings_total);
            if (response.result.user_ratings_total < 1000) {
                adviceMessage.text("Extremly low density have fun");
                adviceMessage.css({"font-weight":"bold", "color":"blue"});
            } else if (response.result.user_ratings_total > 1000 && response.result.user_ratings_total < 2000) {
                adviceMessage.text("Moderate density, use caution")
                adviceMessage.css({"font-weight":"bold", "color":"gray"});
            } else if (response.result.user_ratings_total > 2000 && response.result.user_ratings_total < 3000) {
                adviceMessage.text("Alert: Moderate travel pedestrain density; use caution and social distance");
                adviceMessage.css({"font-weight": "bold" ,"color": "gray"});
            } else {
                adviceMessage.text("Alert: high travel density zone use caution and face mask. ");
                adviceMessage.css({"font-weight":"bold", "color":"red"});
            }
            $("#testbox").append(adviceMessage);
        });
        
        }
        advice();
    
        function renderRestaurant(){
            var coordinates = ["32.8032,130.7079","26.3344,127.8056","38.4343,141.3029","35.5011,134.2351","34.0662,132.9978","38.0023,140.6200","33.2631,130.3009","34.309905,132.993140}"];
            for (var i = 0; i < coordinates.length; i++) {
            var restaurantURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ coordinates[6] +"&radius=1500&type=restaurant&key=AIzaSyBEaMWNg4jQEv7sMyGHIbDMZBvZiRRO7F8";  
            }
            
            $.ajax({
                url: restaurantURL,
                method: "GET",
            }).then(function(response){
            console.log(response);
            // var testDiv = $("<div>");
            for (let i = 15; i < response.results.length; i++) {
            
            var names = response.results[i].name;
            var rating = response.results[i].rating;
            
            var text = $("<p>").text(names);
            $("#restaurant").append(text);
        
            var text = $("<p>").text(rating);
            $("#restaurant").append(text);
            
            console.log(names);  
        }
        }
        )};
            renderRestaurant();
            function searchWeather() {
                // run ajax to call the openWeatherMap API
                $.ajax({
                  type: "GET",
                  // place api url with api key
                  url: "https://api.openweathermap.org/data/2.5/weather?q=Saga&APPID=e2c03ac7234f936970a5f955100e4c06&units=imperial",
                  dataType: "json",
                  success: function(data) {
                    var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                    var card = $("<div>").addClass("card");
                    var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
                    var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                    var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
                    var cardBody = $("<div>").addClass("card-body");
                    var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                    title.append(img);
                    cardBody.append(title, temp, humid, wind);
                    card.append(cardBody);
                    $("#weather").append(card);
                
                  }
                });
              }
            searchWeather();
    });
    });


}







// TO DO:

    // 1) figure out how to render message to the page with onclick event on location pin. 
        // also figure out how to add places and weather to location div.
    // 2) figure out what to do with the arrays (fix them or completely remove)
        // or use alternative method of blocked code  or use alternative method of lots of code
    
        // EVENT LISTENERS FOR PINS
    // When user *dbl clicks*, render dynamic location card with:
        // embedded map with search box / main attraction *easier*
        // current weather displayed
        // restaurants/landmarks we took from the places API & display on pg

    // Stress make sure website is mobile responsive.
    