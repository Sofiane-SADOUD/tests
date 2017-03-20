## The environment.

4 services exists :

(dockerhost = 127.0.0.1 in most case)

- web : available from http://dockerhost/* with nginx
- php : with php7.1.2-fpm
- db : MariaDB
- pma : phpmyadmin available from http://dockerhost:1337
- test : the tool to test the good working of the apis.

To start the environment, get into this folder and execute `docker-compose build && docker-compose up`  
Install composer dependencies with `docker-compose run --rm backend composer install`  
Install node dependencies with `docker-compose run --rm test npm i -q`  
Then initiate the database with `docker-compose run --rm test npm run resetdb`  
If you want to run the tests, simply run `docker-compose run --rm test npm run test`  

If you already build the project once and made no changes in docker-compose.yml, you can just run **`docker-compose up`**  

Now you are ready to go.  

Enjoy here : http://dockerhost:8080/ (default : http://127.0.0.1::8080/)  
 
Notes :  
This is my first time with docker, I used this test to test it also, please be indulgent :).