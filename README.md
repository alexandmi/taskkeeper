# taskkeeper
A simple web application that uses Angular, Spring Boot and a MySQL database to save and organize your tasks.

<p align="center">
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/index.png?raw=true"/>
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/folder.png?raw=true"/>
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/open-task.png?raw=true"/>
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/add-task.png?raw=true"/>
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/delete-task.png?raw=true"/>
</p>


## MySQL configuration

In [server/src/main/resources/application.properties](https://github.com/alexandmi/taskkeeper/blob/main/server/src/main/resources/application.properties), the default mysql configuration has user as root, with password "password", and database name test01, as seen below:

	spring.datasource.url=jdbc:mysql://localhost:3306/test01
	spring.datasource.username=root
	spring.datasource.password=password

You must change the password to the one you have set for your mysql root user, or for whatever user you want to use. You can also change the database name to whatever you like, provided that you create a database with that name in mysql before you run the server, as explained below.

## Run the application
 
### Create the database
Log in to your mysql root user. If you want to start with an empty database, just create a database named test01:
	
	create database test01;

If you want to start with some already created tasks, download the dummyTasks.sql file, and run:

	source /absolute/path/dummyTasks.sql;

where /absolute/path/ is the path in your system you saved the file.

### Run the server
Go to the server folder and run:

	mvn spring-boot:run

### Run the client
Go to the client folder and run:

	ng serve --port 8081

### Open the website

Open your browser and  go to [https://localhost:8081](https://www.google.com)
