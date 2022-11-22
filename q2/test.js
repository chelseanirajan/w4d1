class Computer {
  constructor(ram, cpu, storage) {
    (this.ram = ram), (this.cpu = cpu);
    this.storage = storage;
  }
  runProgram(program) {
    console.log("running... " + program);
  }
}

class Laptop extends Computer {
  constructor(ram, cpu, storage, battery) {
    super(ram, cpu, storage);
    this.battery = battery;
  }
  carryArround() {
    console.log(
      "carrying laptop: cpu: " +
        this.cpu +
        " ram: " +
        this.cpu +
        " storage: " +
        this.storage +
        " battery: " +
        this.battery
    );
  }
}
const comp = new Computer("ram", "cup", "sto");
comp.runProgram("c++");
const lap = new Laptop("g", "p", "l", "3");
lap.carryArround();
