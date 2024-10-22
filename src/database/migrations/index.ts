import { query } from "..";
import { createTable as createAccessTokens } from "./access_tokens.migration";
import { createTable as createRepetitions } from "./repetitions.migration";
import { createTable as createUsers } from "./users.migration";
import { createTable as createTranslations } from "./translations.migration";
import { createTable as createCategories } from "./categories.migration";
import { createTable as createRoles } from "./roles.migration";
import { createTable as createWords } from "./words.migration";
import { createTable as createPivotUserWords } from "./users_wrods.migration";
import { createTable as createHomographs } from "./homographs.migration";
import { createTable as createSettings } from "./settings.migration";
import { createTable as createProfile } from "./profiles.migration";

export async function createTable(tablename: string, querystr: (tablename: string) => string) {
    return new Promise((resolve, reject) => {
        query(querystr(tablename), [], (err, data) => {
            if(err) return reject({ objErr: err, msg: 'Не удалось создать таблицу', tablename: tablename });
            console.log(`Таблица ${tablename} была успешно создана`);
            resolve({ result: `[Creation]: ${tablename} -> done`, ok: true });
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
    } catch (err) {
        console.log('!During the execution of migrations, errors were found!')
        console.log(err);
        throw err;        
    } 
}

