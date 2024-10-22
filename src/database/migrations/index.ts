import { query } from "..";
// Create
import { createTable as createAccessTokens } from "./create/access_tokens.migration";
import { createTable as createRepetitions } from "./create/repetitions.migration";
import { createTable as createUsers } from "./create/users.migration";
import { createTable as createTranslations } from "./create/translations.migration";
import { createTable as createCategories } from "./create/categories.migration";
import { createTable as createRoles } from "./create/roles.migration";
import { createTable as createWords } from "./create/words.migration";
import { createTable as createPivotUserWords } from "./create/users_wrods.migration";
import { createTable as createHomographs } from "./create/homographs.migration";
import { createTable as createSettings } from "./create/settings.migration";
import { createTable as createProfile } from "./create/profiles.migration";
// Alter
import { alterTable as alterUsers } from "./alter/users.alter.migration";

// Оболочка для создания новых таблиц 
export async function createTable(tablename: string, querystr: (tablename: string) => string) {
    return new Promise((resolve, reject) => {
        query(querystr(tablename), [], (err, data) => {
            if(err) return reject({ objErr: err, msg: 'Не удалось создать таблицу', tablename });
            console.log(`Таблица ${tablename} была успешно создана`);
            resolve({ result: `[Creation]: ${tablename} -> done`, ok: true });
        });
    });
}

// Оболочка для обновления таблиц 
export async function alterTable(tablename: string, querystr: (tablename: string) => string) {
    return new Promise((resolve, reject) => {
        query(querystr(tablename), [], (err, data) => {
            if(err) return reject({ objErr: err, msg: 'Не удалось обновить таблицу', tablename });
            console.log(`Таблица ${tablename} была успешно обновлена`);
            resolve({ result: `[Alter]: ${tablename} -> done`, ok: true });
        });
    });
}


// Вызов миграций
export async function migrationsRun() {
    try {
        // СОЗДАНИЕ ТАБЛИЦ
        await createTable('categories', createCategories);
        await createTable('roles', createRoles);
        await createTable('words', createWords);
        await createTable('users', createUsers);
        await createTable('translations', createTranslations);
        await createTable('homographs', createHomographs);
        await createTable('repetitions', createRepetitions);
        await createTable('settings', createSettings);
        await createTable('profiles', createProfile);
        await createTable('access_tokens', createAccessTokens);
        await createTable('user_words', createPivotUserWords);

        // ОБНОВЛЕНИЕ ТАБЛИЦ
        await alterTable('users', alterUsers);

    } catch (err) {
        console.log('!During the execution of migrations, errors were found!')
        console.log(err);
        throw err;        
    } 
}

