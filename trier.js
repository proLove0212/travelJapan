var map;
function initMap() {
    // will show Japan in a big map with markers
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.2048, lng: 138.2529},
    zoom: 6
  });
  console.log(map);

var contentString = "I am an info box!"
var infowindow = new google.maps.InfoWindow({
    content: contentString
});

//Fox Village  
var foxVillage = {lat: 38.0408, lng: 140.5304};
var markerFox = new google.maps.Marker({position: foxVillage, map: map, label: "Fox"});
markerFox.addListener('click', function() {
    infowindow.open(map, markerFox);
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
initMap();

    
  
    



