# Homework Assigment

## About

In this assigment I am using:

-   Frontend - React + Vite + Typescript
-   Backend - Node.js + Express + Typescript
-   Database - PostgrSQL

## Installation

### Clone the project

```
git clone https://github.com/vokenboy/Homework_Assigment
```

### Setup Frontend

Install dependencies

```
npm i
```

Add .env file with this configuration:

```
VITE_API_BASE_URL=http://localhost:3000
```

Run in development environment

```
npm run dev
```

### Setup Backend

Install dependencies

```
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

```
npm run dev
```

### Setup Database

Run the containers

```
docker-compose up -d
```
