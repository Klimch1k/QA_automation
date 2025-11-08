import { Employee } from "./employee.js";

export class Dev extends Employee {
  static returnArrayOfDevs(...args) {
    const devs = [];
    args.forEach(function (item) {
      if (item instanceof Dev) {
        devs.push(item);
      }
    });
    return devs;
  }

  #jobType = "Dev";

  constructor(id, salary) {
    super(id, salary);
  }

  getJobType() {
    return `I am ${this.#jobType}`;
  }
}
