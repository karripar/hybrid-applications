const filename = 'example.sqlite';

const tables = `
CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);
`;

const checkData = `SELECT COUNT(*) AS count FROM articles`;

const exampleData = `
-- Insert authors only if they don't exist
INSERT OR IGNORE INTO authors (name, email) VALUES
('Author 1', 'user1@metropolia.fi'),
('Author 2', 'user2@metropolia.fi');

-- Insert articles only if they don't exist
INSERT INTO articles (title, description, author_id)
SELECT 'Article 1', 'This is the first article', id FROM authors WHERE email = 'user1@metropolia.fi'
UNION ALL
SELECT 'Article 2', 'This is the second article', id FROM authors WHERE email = 'user2@metropolia.fi'
UNION ALL
SELECT 'Article 3', 'This is the third article', id FROM authors WHERE email = 'user1@metropolia.fi';
`;


export {filename, tables, checkData, exampleData};
