# My First Full Stack Application with React and Spring Boot

## Taking my first steps towards becoming a Full Stack Developer with React and Spring Boot

# Todo Application

This is a Todo Application developed using React.js for the frontend and Spring Boot for the backend.

## Features

- Add, edit, and delete todo items
- Mark todo items as complete
- Filter and sort todo items
- User authentication and authorization using JWT
- Responsive UI for easy use on various devices

## Requirements

- Node.js and npm
- Java
- Spring Boot
- React.js

## Getting Started

Certainly! Below is a basic template for a README file for a Todo Application that uses React.js for the frontend and Spring Boot for the backend.

```bash
git clone (REPO)
cd todo-app
```

## Installation

### Backend (Spring Boot)

```bash
cd backend
# Build the project
./mvnw clean install
```

### Frontend (React.js)

```bash
cd frontend
npm install
```

## Configuration

### Backend

Create a `application.properties` file in the `backend/src/main/resources` directory and set the following properties:

```properties
server.port=8080
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

### Frontend

No specific configuration is needed for the frontend.

## Running the Application

### Backend

Build and run the spring boot application

The frontend development server will start at `http://localhost:3000`.

Visit `http://localhost:3000` in your browser to access the Todo Application.
