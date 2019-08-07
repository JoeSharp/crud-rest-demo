CREATE DATABASE gym;
USE gym;

CREATE USER 'gym_admin'@'%' IDENTIFIED BY 'workout-password';
GRANT ALL PRIVILEGES ON gym.* TO 'gym_admin'@'%' WITH GRANT OPTION;

CREATE TABLE gym_member (
    memberID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    age INT,
    PRIMARY KEY (memberID)
);

CREATE TABLE instructor (
    instructorID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(1024),
    PRIMARY KEY (instructorID)
);

CREATE TABLE gym_class (
    classID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    startTime DATETIME,
    duration INT,
    instructorID INT NOT NULL,
    PRIMARY KEY (classID),
    FOREIGN KEY (instructorID) REFERENCES instructor(instructorID)
);

CREATE TABLE booking (
    classID INT NOT NULL,
    memberID INT NOT NULL,
    attended INT,
    PRIMARY KEY (classID, memberID),
    FOREIGN KEY (classID) REFERENCES gym_class(classID),
    FOREIGN KEY (memberID) REFERENCES gym_member(memberID)
);