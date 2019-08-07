Create a docker MySQL container.
```
docker run -p 3306:3306 --name basic-crud-db -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:5.7

docker exec -it basic-crud-db mysql -uroot -p
```
