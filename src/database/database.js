import Sequelize from "sequelize";

export const sequelize = new Sequelize('sequelizePractice', 'postgres', 'Nezuko23', {
  host: 'localhost',
  dialect: 'postgres'
});
