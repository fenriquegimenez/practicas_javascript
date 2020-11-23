class Person {
  constructor(name, last_name, age) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
  }
  info() {
    return `Hola, soy ${this.name} ${this.last_name}, y tengo ${this.age} años.`;
  }
}

student = new Person("Enrique", "Gimenez", 23);
teacher = new Person("Sacha", "Lifszyc", 27);

participants = [student, teacher];

for (participant of participants) {
  console.log(participant.info());
}

function cumpleanos(person) {
  return (person.age += 1);
}

student.age = cumpleanos(student);

console.log(`La nueva edad de ${student.name} es ${student.age}`);
