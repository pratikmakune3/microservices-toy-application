# Microservices Toy Application

The application code is solely for the learning/experimentation purpose and should not be used for production mode! This application is an attempt to put the event-driven architecture into the play hence, ignores some corner cases of the event styled architecture.

Most of the modules(like, Event Bus) are built from the scratch to understand the underlying principles. In real world applications, we have lots of options of multiple open source, sophisticated and optimised services.(e.g RabitMQ, Apache Kafka, NATS etc.) 

Event - Piece of information, Data Structure

Event Bus - Receives events and publish/echos them to listeners.

Event Bus is built using Express, it is simple, super fast but it will not implement vast majority of features of normal Event Buses out there!

