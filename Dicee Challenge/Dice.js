// /* Player name */
// var player1 = "Player 1";
// var player2 = "Player 2";

// // Function to change the player name
// function editNames() {
//   player1 = prompt("Change Player1 name");
//   player2 = prompt("Change player2 name");

//   document.querySelector("p.Player1").innerHTML = player1;
//   document.querySelector("p.Player2").innerHTML = player2;
// }

// // Function to roll the dice
// let randomnumber1 = Math.floor(Math.random() * 6) + 1;

// let randomDiceImage = "dice" + randomnumber1 + ".png";

// let randomImageSource = "images/" + randomDiceImage;

// let image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// // if a player wins

// if (randomnumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 Wins";
// } else if (randomNumber2 > randomnumber1) {
//   document.querySelector("h2").innerHTML = "Player 2 Wins";
// } else {
//   document.querySelector("h3").innerHTML = "Draw!";
// }

// Variables para los nombres de los jugadores
var player1 = "Player 1";
var player2 = "Player 2";

// Función para cambiar los nombres de los jugadores
function editNames() {
  player1 = prompt("Change Player 1 name") || player1;
  player2 = prompt("Change Player 2 name") || player2;

  // Buscar los elementos específicos para cada nombre de jugador
  const player1Element = document.querySelector(".dice p:nth-of-type(1)");
  const player2Element = document.querySelector(".dice:nth-of-type(2) p");

  // Actualizar el contenido de texto en los elementos correspondientes
  if (player1Element) player1Element.innerHTML = player1;
  if (player2Element) player2Element.innerHTML = player2;
}

// Función para lanzar los dados
function rollTheDice() {
  // Generar números aleatorios para cada dado
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Cambiar las imágenes de los dados
  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Mostrar el resultado en el encabezado
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1 + " Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 + " Wins!";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }
}
