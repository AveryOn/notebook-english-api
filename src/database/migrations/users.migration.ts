export function createTable(tablename: string) {
    return `
        CREATE TABLE IF NOT EXISTS ${tablename} (
            id SERIAL PRIMARY KEY,
            login VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role_id INTEGER NOT NULL REFERENCES roles(id),
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
    `
}

// export async function alterUsersTable() {
//     return new Promise((resolve, reject) => {
//         const result = query(`
//             ALTER TABLE users RENAME COLUMN createdat TO created_at;
//             ALTER TABLE users RENAME COLUMN updatedat TO updated_at;
//         `, [], (err, data) => {
//             if(err) return reject(err);
//             resolve(data);
//         });
//         return result;
//     });
// }

