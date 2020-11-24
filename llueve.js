var contador = 0;

var llueve = () => Math.random() < 0.25;

do {
  contador++;
} while (!llueve());

if (contador == 1) {
  console.log('Fui a ver si llovía una vez.');
} else {
  console.log(`Fui a ver si llovía ${contador} veces.`);
}
