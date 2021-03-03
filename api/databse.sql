create TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255)
);
create TABLE users(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAccepted boolean NOT NULL
);