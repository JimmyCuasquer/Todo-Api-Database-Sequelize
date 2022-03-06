// Create server Express
const express = require('express');
const cors = require('cors');
//Routers
const { todosRouter } = require('./routes/todo.routes');

//database
const { sequelize } = require('./util/database');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/todos', todosRouter);

sequelize
  .authenticate()
  .then(() => console.log('database authenticated'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('database synced'))
  .catch((err) => console.log(err));

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)

app.listen(4000, () => {
  console.log('express app running');
});
