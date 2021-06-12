// variable to grab documents background element
let docuBackg = document.body.style;
let button = document.getElementById('btn');
let ColorInfo = document.querySelector('h2');

// create a onclick function that contains:
// array of colors, random number generator based on array length, assign background color
button.addEventListener("click", function(){
  let colorArray = ["NavajoWhite","Peru", "PapayaWhip", "GreenYellow","SpringGreen","Coral","OrangeRed","IndianRed","Red","PaleTurquoise","Fuchsia","DarkSlateGray","SlateBlue"];
  let random = Math.floor(Math.random() * colorArray.length);
  console.log(colorArray[random]);

  docuBackg.backgroundColor = colorArray[random];
  ColorInfo.textContent = colorArray[random];
});