const floaty = document.getElementById("floaty");

const colours = [
  "DeepPink",
  "DarkOrange",
  "Crimson",
  "Aqua",
  "HotPink",
  "GreenYellow",
  "Indigo",
  "LemonChiffon",
  "Lime",
  "Yellow",
  "Blue"
];

let colour = 0;

// Thank you StackOverflow user: https://stackoverflow.com/a/49434653
function randn_bm() {
  let u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
  return num
}

const colorise = ()=> {
  
  floaty.style.top = (document.body.clientHeight) * randn_bm();
  floaty.style.left = (document.body.clientWidth) * randn_bm();

  let random = parseInt(Math.random() * colours.length);
  document.body.style.backgroundColor = colours[parseInt(random)];

  console.log(random, colours[random])

  console.log(colour);
  
}

floaty.addEventListener("mouseover", colorise);