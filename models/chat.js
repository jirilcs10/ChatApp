const {Sequelize} = require('sequelize');
const sequelize = require('../util/databases');

const Chat = sequelize.define('Chat',{
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    date_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
  },
  {
    timestamps: false
  }
);

module.exports = Chat;