class Animal {
  static remainingAnimals = 0;
  #name;
  #species;
  #energy;

  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
    Animal.remainingAnimals++;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }

  get species() {
    return this.#species;
  }
  set species(newSpecies) {
    this.#species = newSpecies;
  }

  get energy() {
    return this.#energy;
  }
  set energy(newEnergy) {
    this.#energy = Math.max(0, newEnergy);
    if (this.#energy === 0) {
      Animal.remainingAnimals--;
    }
  }

  attack(target) {
    if (this.energy === 0) {
      console.log(`${this.name} has no energy left and cannot attack.`);
      // return;
    }

    this.energy -= 10;
    target.energy -= 10;

    console.log(`${this.name} attacks ${target.name}!`);
    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    if (target.energy === 0) {
      console.log(`${this.name} wins! ${target.name} is out of energy.`);
    }
  }

  eat() {
    this.energy += 10;
    console.log(`${this.name} eats and gains energy!`);
    console.log(`${this.name}'s energy: ${this.energy}`);
  }
}

class Bird extends Animal {
  #canFly;

  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }
  set canFly(newCanFly) {
    this.#canFly = newCanFly;
  }

  attack(target) {
    if (this.energy === 0) {
      console.log(`${this.name} has no energy left and cannot attack.`);
      // return;
    }

    this.energy -= 20;
    target.energy -= 20;

    console.log(`${this.name} swoops in to attack ${target.name}!`);
    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    if (target.energy === 0) {
      console.log(`${this.name} wins! ${target.name} is out of energy.`);
    }
  }
}

class Mammal extends Animal {
  #furColor;

  constructor(name, species, furColor) {
    super(name, species, 200);
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }
  set furColor(newFurColor) {
    this.#furColor = newFurColor;
  }

  attack(target) {
    if (this.energy === 0) {
      console.log(`${this.name} has no energy left and cannot attack.`);
      // return;
    }

    this.energy -= 50;
    target.energy -= 50;

    console.log(`${this.name} lunges to attack ${target.name}!`);
    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    if (target.energy === 0) {
      console.log(`${this.name} wins! ${target.name} is out of energy.`);
    }
  }

  eat() {
    this.energy += 20;
    console.log(`${this.name} eats and gains energy!`);
    console.log(`${this.name}'s energy: ${this.energy}`);
  }
}

class Reptile extends Animal {
  #coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }
  set coldBlooded(newColdBlooded) {
    this.#coldBlooded = newColdBlooded;
  }

  attack(target) {
    if (this.energy === 0) {
      console.log(`${this.name} has no energy left and cannot attack.`);
      // return;
    }

    this.energy -= 30;
    target.energy -= 30;

    console.log(`${this.name} strikes ${target.name}!`);
    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    if (target.energy === 0) {
      console.log(`${this.name} wins! ${target.name} is out of energy.`);
    }
  }

  eat() {
    this.energy += 15;
    console.log(`${this.name} eats and gains energy!`);
    console.log(`${this.name}'s energy: ${this.energy}`);
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
