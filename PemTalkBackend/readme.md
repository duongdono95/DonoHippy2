1. npm init
2. npm install cors dotenv express mysql2 sequelize
3. npm install nodemon sequelize-cli @babel/core @babel/node @babel/preset-env --save-dev
4. add "start": "nodemon --exec babel-node src/server.js" to package.json
5. create .sequelizerc in the root directory :

const path = require('path');
// following MVC Model
module.exports = {
// to show how to connect to database
'config': path.resolve('./src/config', 'config.json'),
//
'migrations-path': path.resolve('./src', 'migrations'),
// look up to Model in src/models
'models-path': path.resolve('./src', 'models'),
// create fake data
'seeders-path': path.resolve('./src', 'seeders')
}

6. Create .env and .env.example, define PORT=8080
7. create .gitignore in the root directory
8. create .prettierrc in the root directory
9. create src/server.js
10. create src/config folder
11. add "type": "module" in package.json
