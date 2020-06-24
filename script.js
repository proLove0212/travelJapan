function randomColor(colors , fruits) {
    

  var colors = [ "blue", "green", "yellow", "orange", "magenta", "teal"];

  var fruits = [ "orange", "mango", "peach", "banana", "blueberry", "strawberry", "kiwi"];
      
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

  document.getElementById("colorFruitBtn").innerHTML = ""

  document.getElementById("colorFruitBtn").append("The " + randomColor + " " + randomFruit + ". ");

  }