
export function alterTable(tablename: string) {
    return `
        ALTER TABLE ${tablename}
        ADD COLUMN fullname VARCHAR(255) NOT NULL;
    `
}