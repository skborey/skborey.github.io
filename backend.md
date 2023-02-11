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
  - SOAP (1999) - _HTTP_
  - REST (2000) - _HTTP_
  - GraphQL (2015) - _HTTP_
  - gRPC (2016) - _RPC_

↓

###### Frameworks / Tools / Implementations
  - ExpressJs: implement REST API style
  - RabbitMQ: implement meessaging protocol (AMQP 0.9.1), also has plugg-in to off AMQP 1.0, HTTP, STOMP, and MQTT
  - Kafka: implement binary protocol over the TCP
