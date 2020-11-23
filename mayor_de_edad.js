class Person {
  constructor(name, last_name, age) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
  }
  mayorDeEdad() {
    var mayor;
    if (this.age >= 18) {
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
