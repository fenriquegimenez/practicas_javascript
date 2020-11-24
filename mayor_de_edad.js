var mayoriaDeEdad = prompt('Por favor indique la mayoría de edad en su país:');

class Person {
  constructor(name, last_name, age) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
  }
  esMayorDeEdad() {
    return this.age >= mayoriaDeEdad;
  }
  mayorDeEdad() {
    var mayor;
    if (this.age >= mayoriaDeEdad) {
      mayor = `${this.name} es mayor de edad`;
    } else {
      mayor = `${this.name} es menor de edad`;
    }
    return mayor;
  }
}

enrique = new Person('Enrique', 'Gimenez', 23);
enzo = new Person('Enzo', 'Vera', 17);

personas = [enzo, enrique];

for (persona of personas) {
  console.log(persona.mayorDeEdad());
}
