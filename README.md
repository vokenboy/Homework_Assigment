# Homework Assigment

## About

In this assigment I am using:

-   Frontend - React + Vite + Typescript
-   Backend - Node.js + Express + Typescript
-   Database - PostgrSQL

You can view this on:
Frontend - https://homework-assigment-fe.onrender.com
Backend - https://homework-assigment-be.onrender.com

Server might take 1-2 minutes to wake up.

## Installation

### Clone the project

```bash
git clone https://github.com/vokenboy/Homework_Assigment
```

### Setup Frontend

Install dependencies

```bash
npm i
```

Add .env file with this configuration:

```
VITE_API_BASE_URL=http://localhost:3000
```

Run in development environment

```bash
npm run dev
```

### Setup Backend

Install dependencies

```bash
npm i
```

Add .env file with this configuration

```
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=homework_db
DB_SSL=true

PORT=3000
```

Run in development enviroment

```bash
npm run dev
```

### Setup Database

Run the containers

```bash
docker-compose up -d
```

You can use either container pgAdmin4 from localhost:8080 for DBMS
Or your choise of other DBMS

Make sure to use the provided homework_db.backup to load in the data
