
export function createTable(tablename: string) {
    return `
        CREATE TABLE IF NOT EXISTS ${tablename} (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
    `
}