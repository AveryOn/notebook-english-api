
export function createTable(tablename: string) {
    return `
        CREATE TABLE IF NOT EXISTS ${tablename} (
            id SERIAL PRIMARY KEY,
            set_data JSON DEFAULT NULL,
            user_id INTEGER NOT NULL UNIQUE REFERENCES users(id),
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
    `
}

// ПРО JSONB
/* 

Преимущества JSONB:

    1. Эффективность хранения: Данные хранятся в бинарном формате, что позволяет сократить объем памяти и ускорить доступ.

    2. Индексация: Вы можете создавать индексы на поля внутри JSONB, что значительно ускоряет выполнение запросов.

    3. Быстрый доступ и обновление: Операции чтения и обновления данных в формате JSONB выполняются быстрее по сравнению с обычным JSON.

    4. Операторы и функции: PostgreSQL предоставляет множество встроенных операторов и функций для работы с JSONB, таких как извлечение значений, фильтрация и агрегация.

Пример использования
Пример создания таблицы с полем типа JSONB:

    CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        attributes JSONB
    );

Вставка данных:

    INSERT INTO products (name, attributes) VALUES
        ('Laptop', '{"brand": "Dell", "memory": "16GB", "storage": "512GB SSD"}'),
        ('Smartphone', '{"brand": "Apple", "memory": "4GB", "storage": "128GB"}');


Извлечение данных:

    SELECT name, attributes->>'brand' AS brand FROM products;

Фильтрация по атрибутам:

    SELECT * FROM products WHERE attributes @> '{"brand": "Dell"}';


Обновление значения:

    UPDATE products SET attributes = jsonb_set(attributes, '{storage}', '"1TB SSD"') WHERE name = 'Laptop';
*/