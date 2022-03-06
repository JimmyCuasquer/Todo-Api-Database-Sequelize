const { DataTypes } = require('sequelize');

const { sequelize } = require('../util/database');

const Todo = sequelize.define('todo', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
});

module.exports = { Todo };
