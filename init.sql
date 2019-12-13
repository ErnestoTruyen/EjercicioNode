CREATE TABLE Usuarios (
    ID SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL
);

INSERT INTO Usuarios (nombre,apellido) VALUES ('Ernesto','Truyen');