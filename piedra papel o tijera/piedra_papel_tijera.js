var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
jugadas = [piedra, papel, tijera];

function juego(user, cpu) {
  if (user != cpu) {
    if (user == piedra) {
      res = "Ganaste!" ? cpu == tijera : "Perdiste!";
    } else if (user == papel) {
      res = "Ganaste!" ? cpu == piedra : "Perdiste!";
    } else if (user == tijera) {
      res = "Ganaste!" ? cpu == papel : "Perdiste!";
    } else {
      res = "Introduce una opción válida.";
    }
  } else {
    res = "Empate!";
  }
  return res;
}

index_jugadas = Math.floor(Math.random() * jugadas.length);
cpu = jugadas[index_jugadas];
user = prompt("Por favor introduce ");
console.log(`La compu jugó ${cpu}`);
console.log(juego(user, cpu));
