-- FAQ
CREATE TABLE Driver (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    titles number
);

INSERT INTO Driver (name, titles) values('Michael Schumacher', 7);
INSERT INTO Driver (name, titles) values('Lewis Hamilton', 6);
INSERT INTO Driver (name, titles) values('Sebastian Vettel', 4);
INSERT INTO Driver (name, titles) values('Fernando Alonso', 2);
INSERT INTO Driver (name, titles) values('Nico Rosberg', 1);
INSERT INTO Driver (name, titles) values('Kimi Räikkönen', 1);
INSERT INTO Driver (name, titles) values('Valtteri Bottas', 0);
INSERT INTO Driver (name, titles) values('Charles Leclerc', 0);
INSERT INTO Driver (name, titles) values('Antonio Giovinazzi', 0);
INSERT INTO Driver (name, titles) values('Pierre Gasly', 0);
INSERT INTO Driver (name, titles) values('Daniil Kvyat', 0);
INSERT INTO Driver (name, titles) values('Romain Grosjean', 0);
INSERT INTO Driver (name, titles) values('Kevin Magnussen', 0);
INSERT INTO Driver (name, titles) values('Lando Norris', 0);
INSERT INTO Driver (name, titles) values('Carlos Sainz Jr.', 0);
INSERT INTO Driver (name, titles) values('Sergio Pérez', 0);
INSERT INTO Driver (name, titles) values('Lance Stroll', 0);
INSERT INTO Driver (name, titles) values('Alexander Albon', 0);
INSERT INTO Driver (name, titles) values('Max Verstappen', 0);
INSERT INTO Driver (name, titles) values('Daniel Ricciardo', 0);
INSERT INTO Driver (name, titles) values('Esteban Ocon', 0);
INSERT INTO Driver (name, titles) values('Nicholas Latifi', 0);
INSERT INTO Driver (name, titles) values('George Russell', 0);

-- Down
DROP TABLE Driver;