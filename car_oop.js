class Auto {
  constructor(brand, model, release_year, color, owner) {
    this.brand = brand;
    this.model = model;
    this.release_year = release_year;
    this.color = color;
    this.owner = owner;
  }
  info() {
    return `El vehículo de ${this.owner} es un ${this.brand} ${this.model} color ${this.color} del año ${this.release_year}.`;
  }
}

daia = new Auto("Ford", "Ecosport", 2017, "dorado", "Daia");
juan = new Auto("Nissan", "Kicks", 2018, "negro", "Juan");
enri = new Auto("Toyota", "Starlet", 1999, "verde", "Enrique");
mirtus = new Auto("Toyota", "Funcargo", 2003, "rojo", "Mirtus");

autos = [daia, juan, enri, mirtus];

for (auto of autos) {
  console.log(auto.info());
}
