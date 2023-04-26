const { functionTypeAnnotation } = require("@babel/types");

// Generamos a los jugadores e incializamos en la posición 0
let p1 = 0;
let p2 = 0;
let p = [];
// Generamos un movimiento aleatorio del dado que podra estar entre cualquier valor entre 1 y 6
let dado = 1;
let entrada = "y";
// Asignamos un turno incializado hacía el primer jugador
let turno1 = true;

const lzDado = (turno1, p1, p2) => {
  let x = [];
  dado = Math.floor(Math.random() * 6) + 1;
  // Cambio de turno
  if (turno1 == true) {
    console.log("Es el turno del jugador 1");
    turno1 = false;
    p1 = p1 + dado;
  } else if (turno1 == false) {
    console.log("Es el turno del jugador 2");
    turno1 = true;
    p2 = p2 + dado;
  }
  x = [dado, turno1, p1, p2];
  return x;
};

function Game(turno1, p1, p2) {
  //Generamos en consola cada iteraccion del juego
  while (p1 <= 25 && p2 <= 25) {
    entrada = entrada.toLowerCase();
    if (entrada == "y") {
      p = lzDado(turno1, p1, p2);
      console.log(p);
      turno1 == true
        ? console.log(`La posición del jugador esta en la casilla ${p1}`)
        : console.log(`La posición del jugador esta en la casilla ${p2}`);
      p1 = p[2];
      p2 = p[3];
    }
    //Reglas de escaleras y serpiente
    //Para las escaleras: cuando esté en las casillas #3, 6, 9, 10 el sube
    //Para serpientes: cuando esté en las casillas #22, 24, 19, 14 el baja
    switch (p[2]) {
      case 3:
        p1 = p1 + 8;
        console.log("asciende de 3 a 11");
        break;
      case 6:
        p1 = p1 + 11;
        console.log("asciende de 6 a 17");
        break;
      case 9:
        p1 = p1 + 9;
        console.log("asciende de 9 a 18");
        break;
      case 10:
        p1 = p1 + 2;
        console.log("asciende de 10 a 12");
        break;
      case 14:
        p1 = p1 - 10;
        console.log("desciende de 14 a 4");
        break;
      case 19:
        p1 = p1 - 11;
        console.log("desciende de 19 a 8");
        break;
      case 22:
        p1 = p1 - 2;
        console.log("desciende de 22 a 20");
        break;
      case 24:
        p1 = p1 - 8;
        console.log("desciende de 24 a 16");
        break;
      default:
        break;
    }
    switch (p[3]) {
      case 3:
        p2 = p2 + 8;
        console.log("asciende de 3 a 11");
        break;
      case 6:
        p2 = p2 + 11;
        console.log("asciende de 6 a 17");
        break;
      case 9:
        p2 = p2 + 9;
        console.log("asciende de 9 a 18");
        break;
      case 10:
        p2 = p2 + 2;
        console.log("asciende de 10 a 12");
        break;
      case 14:
        p2 = p2 - 10;
        console.log("desciende de 14 a 4");
        break;
      case 19:
        p2 = p2 - 11;
        console.log("desciende de 19 a 8");
        break;
      case 22:
        p2 = p2 - 2;
        console.log("desciende de 22 a 20");
        break;
      case 24:
        p2 = p2 - 8;
        console.log("desciende de 24 a 16");
        break;
      default:
        break;
    }

    turno1 = p[1];
  }

  console.log(`El valor del dado fue: ${p[0]}`);
  return p;
}

Game(true, 0, 0)

module.exports = Game;
