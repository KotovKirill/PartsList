USE tpartspartspartsest;

DROP TABLE IF EXISTS parts;

CREATE TABLE parts (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  need BIT(1) NOT NULL DEFAULT b'0',
  count INT(8))
  DEFAULT CHARACTER SET = utf8;
  
INSERT INTO parts (name, need, count) VALUES ("Part1", 1, 5);
INSERT INTO parts (name, need, count) VALUES ("Part2", 0, 2);
INSERT INTO parts (name, need, count) VALUES ("Part3", 1, 4);
INSERT INTO parts (name, need, count) VALUES ("Part4", 1, 18);
INSERT INTO parts (name, need, count) VALUES ("Part5", 0, 4);
INSERT INTO parts (name, need, count) VALUES ("Part6", 1, 7);
INSERT INTO parts (name, need, count) VALUES ("Part7", 0, 12);
INSERT INTO parts (name, need, count) VALUES ("Part8", 1, 8);
INSERT INTO parts (name, need, count) VALUES ("Part9", 0, 20);
INSERT INTO parts (name, need, count) VALUES ("Part10", 1, 6);
INSERT INTO parts (name, need, count) VALUES ("Part11", 1, 2);
INSERT INTO parts (name, need, count) VALUES ("Part12", 0, 8);
INSERT INTO parts (name, need, count) VALUES ("Part13", 0, 9);
INSERT INTO parts (name, need, count) VALUES ("Part14", 0, 21);
INSERT INTO parts (name, need, count) VALUES ("Part15", 0, 54);
INSERT INTO parts (name, need, count) VALUES ("Part16", 1, 13);
INSERT INTO parts (name, need, count) VALUES ("Part17", 1, 14);
INSERT INTO parts (name, need, count) VALUES ("Part18", 0, 17);
INSERT INTO parts (name, need, count) VALUES ("Part19", 1, 3);
INSERT INTO parts (name, need, count) VALUES ("Part20", 1, 15);
INSERT INTO parts (name, need, count) VALUES ("Part21", 0, 73);
INSERT INTO parts (name, need, count) VALUES ("Part22", 0, 25);
INSERT INTO parts (name, need, count) VALUES ("Part23", 0, 32);
INSERT INTO parts (name, need, count) VALUES ("Part24", 0, 18);
INSERT INTO parts (name, need, count) VALUES ("Part25", 1, 16);