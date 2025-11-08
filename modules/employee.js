export class Employee {
  static compareSalary(user1 = {}, user2 = {}) {
    if (user1.salary > user2.salary) {
      return `User with id ${user1.id} has greater salary`;
    } else if (user2.salary > user1.salary) {
      return `User with id ${user2.id} has greater salary`;
    } else {
      return "Salaries are equal";
    }
  }

  constructor(id, salary) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true,
    });
    this.salary = salary;
  }
}
