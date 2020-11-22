# microservices-toy-application

The application code is solely for the learning/experimentation purpose and should not be used for production grade! This application is an attempt to put the event-driven architecture into the play and hence also ignoring some corner cases of the event styled architecture.

Most of the modules(even, Event Bus) are built from the scratch to understand the underlying principles. In real world applications, we have lots of options of multiple open sourced, sophisticated/optimised services(like RabitMQ, Kafka, NATS... and what not)! 

Event - Piece of information, data structure

Event Bus - Receives events and publish them to listeners.

Event Bus in this application is built using Express, it is simple, super fast but it will not implement vast majority of features of normal Event Buses out there!
