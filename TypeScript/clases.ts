

interface Saludable {
  hello(): void;
}


class Person implements Saludable {

  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public hello() {
    console.log(`Hola, soy ${this.name}.`);
  }

}

const person5 = new Person("Pepe");

