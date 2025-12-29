export class DatabaseConnectionError extends Error {
    constructor(message: string = "Database connection failed") {
        super(message);
        this.name = "DatabaseConnectionError";
    }
}

export class NotFoundError extends Error {
    constructor(message: string = "Resource not found") {
        super(message);
        this.name = "NotFoundError";
    }
}

export class ValidationError extends Error {
    constructor(message: string = "Validation failed") {
        super(message);
        this.name = "ValidationError";
    }
}

export class QueryError extends Error {
    constructor(message: string = "Database query failed") {
        super(message);
        this.name = "QueryError";
    }
}
