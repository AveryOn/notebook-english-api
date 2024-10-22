export function createTable(tablename: string) {
    return `
        CREATE TABLE IF NOT EXISTS ${tablename} (
            id SERIAL PRIMARY KEY,
            value TEXT NOT NULL,
            word_id INTEGER NOT NULL REFERENCES words(id),
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
    `
}