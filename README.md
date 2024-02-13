serveer using express js

1,create a folder for  server
2, create pacakage.json file : usinfg npm init -y
3, install external package to create server : usingg npm , npm i express core dotenv

4, create .env file : to hold enviomnmental variable
5, create .gitignore file, add node_modules, . env
6, create index.js file

7, create express server in  inddex.js
- import dotenv package, call config method : to load content of .env file into process.env
- import express to a variable 
- import cors to a variable
- create express server : call express()
- use cors in express server
- create a port to hostt server app
- listen must listen the port for client requests
- to resolve client request (http:GET/POST/PUT/DELETE request)
-  server.httpMethod(path,request handler functionn (req,res)=>{})
- create a controller folder in server app
   - create js file for user management
   - create a routes folder in server app
   - import express
   - to set up routes for express  router class


8, to run server app : use command node index.js (npx nodemon index.js) also update it as start command in package.json
