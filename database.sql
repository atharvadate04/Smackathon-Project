create database if not exists RailAssist;
use RailAssist;

CREATE TABLE Complaints (
    complaint_id varchar(100),
	complaint_text TEXT,
    complaint_date DATE,
    status VARCHAR(20),
    pnr int
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