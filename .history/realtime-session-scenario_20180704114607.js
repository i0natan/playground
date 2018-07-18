const EventEmitter = require("events");

class Scenario extends EventEmitter {
  constructor() {
    super();
  }

  start(){
    console.log(`One time schedule is about to emit start event`);
    setTimeout(() => {
        this.emit("end", {});
    }, 2000);
  }
}
