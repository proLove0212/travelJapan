$(document).ready(function(){
    // An embdedded URL is used to return the map of a specific location once that location is passed through the function
    function googleMap(searchValue) {
        $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQgF0U4thnAFyIGXpznJ8w5Cov_aQ5cXs&q=" + searchValue)
        // service = new google.maps.places.PlacesService(map);
        // service.getDetails(request, callback);
    }
    googleMap("Fox Village, Japan");
    
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

        $.ajax({
            // Returns a pop-up on the page that confirms that the ajax call works 
            type: "GET",
            url: linkURL, 
        }).then(function(response){
            console.log(response);
            // create a function to get the user ratings key value pair.
            // var totalRatingNum = response.result.user_ratings_total;
            // $("#rating").append(totalRatingNum);
       
        var adviceMessage = $("#testbox").text("Travel Advice: " + response.result.user_ratings_total);
        
        if (response.result.user_ratings_total < 100) {
            adviceMessage.text("Bundle up! It's a cold one.");
            adviceMessage.css({"font-weight":"bold", "color":"blue"});
        } else if (response.result.user_ratings_total > 100 && response.result.user_ratings_total < 500) {
            adviceMessage.text("Mom says grab a light jacket!")
            adviceMessage.css({"font-weight":"bold", "color":"gray"});
        } else if (response.result.user_ratings_total > 500 && response.result.user_ratings_total < 1000) {
            adviceMessage.text("Alert: Moderate travel pedestrain density; use caution and social distance");
            adviceMessage.css({"font-weight": "bold" ,"color": "green"});
        } else {
            adviceMessage.text("Alert:high travel density zone use caution and face mask. ");
            adviceMessage.css({"font-weight":"bold", "color":"red"});
        }
        
        $("#testbox").append(adviceMessage);

    });
    }
    googlePlaces();
    
  
//     <!-- Combine all our different code pages
//   tie in my function for the emergency message to the new map
//    decide if it uses embedded map or google ajax map
//     solve issues of user ratings total reporting the wrong number/old number -->

});




// find example how to do this from earlier assignments.
// create if  statement to determine high population
// what is high and low and do if else staments weather dashboard for this.
// render the results to the appropriate div name
//create a div and box results enter into Copy weather app

// Extra Stuff add parameters from google like how we did.
    // add business status


//  