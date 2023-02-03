{/*2. Basically the commands used to make the postgres database. Typed these into SQL Shell to generate database. Not required but useful for referencing.*/}

CREATE DATABASE todo; {/*Database name*/}

CREATE TABLE todo( {/*Table within Database*/}
    todo_id SERIAL PRIMARY KEY, {/*id is specified as SERIAL PRIMARY KEY. This is to ensure that every item added to the list is seen as unique. It also auto-increments id, eliminating the need to specify id whenever adding a new item. Go to db.jsfor part 3*/}
    description VARCHAR(255)
);