# Backend [wip]

There are 7 layers of [OSI Model](https://en.wikipedia.org/wiki/OSI_model). There are 5 layers of TCP/IP protocol architecture model (combine the 5,6,7 layers of OSI to be 1 layer call application layer) or 4 [Internet protocol suites](https://en.wikipedia.org/wiki/Internet_protocol_suite).
There many standards to success the implementation current server application. The below are the break down from standard or specification until implementation become a tools
framework that we can use with any programming language.

###### Application layer protocols
  - Client-Server Protocol(HTTP, ...)
  - Request–Response Protocol(RPC)
  - Messaging Protocol (Websocket, AMQP, ...)

↓

###### API Architectural Styles
  - SOAP - aslso as a protocol (1999) - _HTTP_
  - REST (2000) - _HTTP_
  - GraphQL (2015) - _HTTP_
  - gRPC (2016) - _RPC_

↓

###### Frameworks / Tools / Implementations
  - ExpressJs: implement REST API style
  - RabbitMQ: implement meessaging protocol (AMQP 0.9.1), also has plugg-in to off AMQP 1.0, HTTP, STOMP, and MQTT
  - Kafka: implement binary protocol over the TCP

## Clean Code

**OOP**
- Inheritence
- Pholymorphism
- Abstraction
- Encapsulation

**SOLID**
- The Single Responsibility (SRP)
- The Open-Close Principle (OCP)
- The Liskov Substitution Principle (**LSP**): All sub-class conditions should not break each other.
This principle prevent from create bug when some case real world understanding cannot transfer to code completely as expected.
e.g. about Rectangle and Square geometry class.
 ```java
// 1. In math, square is subclass of rectangle. So we can do following inheritence to reduce code
class Rectangle {
  public setHeight (float h) { this.height = h; }
  public setWidth (float w) { this.width = w; }
  public float area () { return this.height * this.width; }
}

class Square extends Rectangle {}

// 2. But since type of Square has a specific condition that all edge must be equal,
// so we need to make sure that height = width
class Square extends Rectangle {
  public setHeight (float h) { this.setSize(h); }
  public setWidth (float w) { this.setSize(w); }
  private setSize (float s) { this.height = s; this.width = s;}
}

// 3. Now when using it
void draw (Rectangle rec) {
  rec.setHeight(2);
  rec.setWidth(3);
  float area = rec.area();
}

/*
* This's can be a bug, when **rec** is type of Square, it'll calculate differently. Area will be 3x3=9 NOT 2x3.
* So, relationship between Square and Rectangle is break the Liskove Substitution Principle.
* Liskov Subsitution Principle will help to make sure this kind of confusion/bug.
* So, when doing the interitance, make sure that all sub class object can reduce the superclass method in same behavior,
* and all subclass object can replace(substiute) each other without breaking the expected result.
**/
 ```
- Interface Segregation Principle (**ISP**): Seperate large interface into specific interface. When implementing, we can pick only neccessary interfaces. No code should be forced to depend on methods it does not use. e.g.
```java
// 1. Large interfce that include everything relate to vechicle
interface Vehicle {
    public void refuel();
    public void speed();
}
class Car implements Vehicle {}
class Bike implements Vehicle {}

// 2. Bike will be fource to implement the refuel() method that is not necessary.
// So we better seperate into 2 different interfaces as below and implement accordingly.
interface BaseVehicle {
    public void speed();
}
interface FuelVecicle {
    public void refuel();
}
class Car implements BaseVehicle, FuelVecicle {}
class Bike implements BaseVehicle {}
```
ISP will help, come to solve the problem in recompile non-neccesary code.
- Dependency Invension Principle (DIP)
