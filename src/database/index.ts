import { Pool, PoolClient } from 'pg';


// Connect DB
export const pool: Pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
    database: process.env.DB_NAME,
});

export const query = async (text: string, params: any[], resolve?: (err: any | null, data: any | null) => void) => {
    try {
        const start = Date.now()
        const result = await pool.query(text, params)
        const duration = Date.now() - start
        if(resolve) resolve(null, result);
        console.log(`Execute: `, { duration })
        return result
    } catch (err) {
        if(resolve) resolve(err, null);
    }

}

interface ExtendedPoolClient extends PoolClient {
    lastQuery: any;
}

export async function getClient() {
    const client = await pool.connect() as ExtendedPoolClient;
    const query = client.query as (args: any) => any;
    const release = client.release;
    // set a timeout of 5 seconds, after which we will log this client's last query
    const timeout = setTimeout(() => {
        console.error('A client has been checked out for more than 5 seconds!')
        console.error(`The last executed query on this client was: ${client.lastQuery}`)
    }, 5000)
    // monkey patch the query method to keep track of the last query executed
    client.query = (...args: any) => {
        client.lastQuery = args
        return query.apply(client, args)
    }
    client.release = () => {
        // clear our timeout
        clearTimeout(timeout)
        // set the methods back to their old un-monkey-patched version
        client.query = query
        client.release = release
        return release.apply(client)
    }
    return client;
}