
export function createTable(tablename: string) {
    return `
        CREATE TABLE IF NOT EXISTS ${tablename} (
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            word_id INTEGER REFERENCES words(id) ON DELETE CASCADE,
            PRIMARY KEY (user_id, word_id)
        );
    `
}