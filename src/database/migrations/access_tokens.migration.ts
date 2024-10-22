export function createTable(tablename: string) {
    return `
        CREATE TABLE IF NOT EXISTS ${tablename} (
            id SERIAL PRIMARY KEY,
            hash VARCHAR(255) NOT NULL,
            user_id INTEGER NOT NULL REFERENCES users(id),
            last_used TIMESTAMPTZ DEFAULT NULL,
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
    `
}

// export async function createAccessTable(tablename: string) {
//     return new Promise((resolve, reject) => {
//         const result = query(`
//             CREATE TABLE IF NOT EXISTS access_tokens (
//                 id SERIAL PRIMARY KEY,
//                 hash VARCHAR(255) NOT NULL,
//                 user_id INTEGER NOT NULL REFERENCES users(id),
//                 last_used TIMESTAMPTZ DEFAULT NULL,
//                 created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
//                 updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
//             );
//         `, [], (err, data) => {
//             if(err) return reject(err);
//             resolve(data);
//         });
//         return result;
//     });
// }
