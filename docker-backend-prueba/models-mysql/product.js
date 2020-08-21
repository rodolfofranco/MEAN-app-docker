module.exports = (sequelize, type) => {
    return sequelize.define('Product', {
        name: {
            type: type.STRING,
            allowNull: false
        },
        price: {
            type: type.FLOAT,
            allowNull: false
        }
    })
}
