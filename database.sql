create database if not exists RailAssist;
use RailAssist;

CREATE TABLE Department (
    deptid varchar(100) PRIMARY KEY ,
    deptname VARCHAR(20)
);

CREATE TABLE employees (
    eid varchar(100) PRIMARY KEY,
    deptid varchar(100),
    username VARCHAR(20),
    password VARCHAR(16),
    ename VARCHAR(30),
    email VARCHAR(30),
    FOREIGN KEY (deptid)
        REFERENCES Department (deptid)
);

CREATE TABLE users (
    userid varchar(100) PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(16),
    name VARCHAR(30),
    email VARCHAR(30)
);

CREATE TABLE ComplaintTypes (
    typeid varchar(100) PRIMARY KEY,
    typename VARCHAR(50)
);

CREATE TABLE Complaints (
    complaintid varchar(100) PRIMARY KEY,
    userid varchar(100),
    deptid varchar(100),
    typeid varchar(100),
    complaint_text TEXT,
    complaint_date DATE,
    status VARCHAR(20),
    pnr int,
    FOREIGN KEY (userid)
        REFERENCES users (userid),
    FOREIGN KEY (deptid)
        REFERENCES Department (deptid),
	FOREIGN KEY (typeid) 
		REFERENCES ComplaintTypes(typeid)
);

CREATE TABLE EmployeeAssignments (
    assignmentid varchar(100) PRIMARY KEY,
    complaintid varchar(100),
    eid varchar(100),
    assigned_date DATE,
    FOREIGN KEY (complaintid)
        REFERENCES Complaints (complaintid),
    FOREIGN KEY (eid)
        REFERENCES Employees (eid)
);
