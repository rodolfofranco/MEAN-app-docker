const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE || 'DockerBraulio',
process.env.DB_USER || 'root',
process.env.MYSQL_ROOT_PASSWORD|| '1234',
{
    host: process.env.DB_HOST || 'mysql',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    dialectOptions: {
        ssl: process.env.DB_SSL == "true"
    }
});

const ProductModel = require('./models-mysql/product');


const Product = ProductModel(sequelize, DataTypes);

sequelize.sync({ force: false}).then(() => {
    console.log('Database MySQL sync!')
});

module.exports = {
    Product
}