# TasKKeeper

TasKKeeper is a simple web application that saves and organizes tasks. You can create thematic folders, and tasks inside the folders. Each folder has a name, and each task consists of a title and a description. The names, the titles and the descriptions are editable. You can also delete the folders and the tasks you made.
It is made with Angular, Spring Boot and a MySQL database.

## Screenshots

<p align="center">
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/index.png?raw=true"/>
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/folder.png?raw=true"/>
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/open-task.png?raw=true"/>
</p>


## MySQL configuration

In [server/src/main/resources/application.properties](https://github.com/alexandmi/taskkeeper/blob/main/server/src/main/resources/application.properties), the default mysql configuration has user as root, with password "password", and database name test01, as seen below:

	spring.datasource.url=jdbc:mysql://localhost:3306/test01
	spring.datasource.username=root
	spring.datasource.password=password

You must change the password to the one you have set for your mysql root user, or for whatever user you want to use. You can also change the database name to whatever you like, provided that you create a database with that name in mysql before you run the server, as explained below.

## Run the application
  
**1. Create the database**
  
Log in to your mysql root user. If you want to start with an empty database, just create a database named test01:
	
	create database test01;

If you want to start with some already created tasks, download the dummyTasks.sql file, and run:

	source /absolute/path/dummyTasks.sql;

where /absolute/path/ is the path in your system you saved the file.

**2. Run the server**
  
Go to the server folder and run:

	mvn spring-boot:run

**3. Run the client**
  
Go to the client folder and run:

	ng serve --port 8081

**4. Open the website**
  
Open your browser and  go to [https://localhost:8081](https://localhost:8081)

## Server APIs
The APIs provided are for simple CRUD operations.

**Folder entity APIs:**

| Method 	| URL | Action |
| ---------------	| ------------------ | ------------------ |
| GET 	| ```/api/folders``` 	 | retrieve all folders |
| GET 	| ```/api/folders/:id```	 | retrieve a folder by id|
| POST	| ```/api/folders```	 | create a new folder |
| PUT	| ```/api/folders/:id```	 | update a folder by id |
| DELETE | ```/api/folders/:id```	 | delete a folder by id|

**Task entity APIs:**

| Method 	| URL | Action |
| ---------------	| ------------------ | ------------------ |
| GET|	```/api/tasks```	|	retrieve all tasks|
| GET|	```/api/tasks/:id```	|	retrieve a task by id|
|POST	| ```/api/tasks```	|	create a new task|
|PUT|	```/api/tasks/:id```	|	update a task by id|
|DELETE	|```/api/tasks/:id```	|	delete a task|


## Angular components diagram

The connectivity of the client's components is shown below:
<p align="center">
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/components-diagram.png?raw=true"/>
</p>

## Database entities diagram
There are only two entities with a one-to-many relationship:
<p align="center">
  <img src="https://github.com/alexandmi/taskkeeper/blob/main/screenshots/db-entities.png?raw=true"/>
</p>
