create database if not exists RailAssist;
use RailAssist;

CREATE TABLE users (
    userid varchar(100) PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(16),
    name VARCHAR(30),
    email VARCHAR(30)
);

CREATE TABLE Complaints (
    userid varchar(100),
	complaint_text TEXT,
    complaint_date DATE,
    status VARCHAR(20),
    pnr int,
    FOREIGN KEY (userid)
        REFERENCES users (userid)
);

create table suggestions (
	suggest varchar(500)
);