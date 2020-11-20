var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function juego(user, cpu) {
  if (user != cpu) {
    if (user == piedra) {
      if (cpu == tijera) {
        res = "Ganaste!";
      } else if (cpu == papel) {
        res = "Perdiste!";
      }
    } else if (user == papel) {
      if (cpu == tijera) {
        res = "Perdiste!";
      } else if (cpu == piedra) {
        res == "Ganaste!";
      }
    } else if (user == tijera) {
      if (cpu == piedra) {
        res == "Perdiste!";
      } else if (cpu == papel) {
        res == "Ganaste!";
      }
    }
  } else {
    res = "Empate!";
  }
  return res;
}
console.log(juego(papel, papel));
