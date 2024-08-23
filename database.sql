create database if not exists RailAssist;
use RailAssist;

CREATE TABLE Department (
    deptid INT PRIMARY KEY ,
    deptname VARCHAR(20)
);

CREATE TABLE employees (
    eid INT PRIMARY KEY,
    deptid INT,
    username VARCHAR(20),
    password VARCHAR(16),
    ename VARCHAR(30),
    email VARCHAR(30),
    FOREIGN KEY (deptid)
        REFERENCES Department (deptid)
);

CREATE TABLE users (
    userid INT PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(16),
    name VARCHAR(30),
    email VARCHAR(30),
);

CREATE TABLE ComplaintTypes (
    typeid INT PRIMARY KEY,
    typename VARCHAR(50)
);

CREATE TABLE Complaints (
    complaintid INT PRIMARY KEY,
    userid INT,
    deptid INT,
    typeid INT,
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
    assignmentid INT PRIMARY KEY,
    complaintid INT,
    eid INT,
    assigned_date DATE,
    FOREIGN KEY (complaintid)
        REFERENCES Complaints (complaintid),
    FOREIGN KEY (eid)
        REFERENCES Employees (eid)
);