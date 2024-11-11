/*

Solid Principles : 
 S -> Single Resposibilities Principle
 O -> Open/Closed Principle
 L -> Liskov Substitution Principle
 I -> Interface Segregation Principle
 D -> Dependency Inversion Principle
 
 Advantage: 
    1. Avoid dublicate code 
    2. Easy to maintain
    3. Easy to understand
    4. Flexible software
    5. Reduce Complexity

1. Single Responsibility Principle (SRP)
A class should have one and only one reason to change. This means a class should have only one responsibility or job.

Example: Instead of having a User class that handles user data and user notifications, split them into separate classes.

// User.ts
class User {
  constructor(public name: string, public email: string) {}
}

// UserNotification.ts
class UserNotification {
  notify(user: User, message: string): void {
    console.log(`Sending notification to ${user.email}: ${message}`);
  }
}

2. Open/Closed Principle (OCP)
Software entities should be open for extension, but closed for modification. This means you should be able to add new functionality without changing existing code.

Example: Suppose we want to calculate the area of shapes. Rather than modifying the Shape class for each new shape, we can extend it.

interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  area(): number {
    return this.width * this.height;
  }
}

// The Shape classes are open for extension but closed for modification
const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => console.log(shape.area()));


3. Liskov Substitution Principle (LSP)
Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.

Example: If we have a Bird class with a fly() method, subclasses of Bird that can't fly (e.g., Penguin) should not inherit from it or override it meaningfully.

class Bird {
  fly(): void {
    console.log("Flying");
  }
}

class Sparrow extends Bird {}

class Penguin extends Bird {
  fly(): void {
    throw new Error("Penguins can't fly!");
  }
}

// Instead, we could handle the `Penguin` differently:
class Penguin {
  swim(): void {
    console.log("Swimming");
  }
}

4. Interface Segregation Principle (ISP)
Clients should not be forced to depend on methods they do not use. Rather than one large interface, it's better to have smaller, specific interfaces.

Example: If a Worker interface includes both work() and eat(), this may not suit robots, which don’t eat. Separate the interfaces.

interface Worker {
  work(): void;
}

interface Eater {
  eat(): void;
}

class HumanWorker implements Worker, Eater {
  work(): void {
    console.log("Working...");
  }
  eat(): void {
    console.log("Eating...");
  }
}

class RobotWorker implements Worker {
  work(): void {
    console.log("Working...");
  }
}


5. Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules; both should depend on abstractions. Instead of hard dependencies, use abstractions (interfaces).

Example: Instead of having a Database class directly accessed by a UserService class, create an interface.

interface Database {
  save(data: string): void;
}

class MySQLDatabase implements Database {
  save(data: string): void {
    console.log(`Saving ${data} in MySQL database`);
  }
}

class UserService {
  constructor(private database: Database) {}
  saveUser(data: string): void {
    this.database.save(data);
  }
}

// Usage
const mySQLDatabase = new MySQLDatabase();
const userService = new UserService(mySQLDatabase);
userService.saveUser("User data");


DRY : Don't Repeat Yourself: Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

KISS : Keep It Simple, Stupid: most systems work and are understood better if they are kept simple rather than made complex.

YAGNI : You Aren't Gonna Need It: don't implement something until it is necessary.

*/