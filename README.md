# crud-rest-demo

This is an application to demonstrate REST and CRUD.

It contains the code for a server written in Java, using Dropwizard and jOOQ to connect
to a MySQL database.

I am using Docker to spin up MySQL server

From
https://hub.docker.com/r/mysql/mysql-server/

```
docker run -p 3306:3306 --name basic-crud-db -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql/mysql-server

docker exec -it basic-crud-db mysql -uroot -p

mysql> CREATE USER 'librarian'@'%' IDENTIFIED BY 'cardigan';
mysql> GRANT ALL PRIVILEGES ON library.* TO 'librarian'@'%' WITH GRANT OPTION;
```
