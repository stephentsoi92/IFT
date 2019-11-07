module.exports = function(sequelize, DataTypes) {
    const Inventory = sequelize.define('Inventory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            notNull: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            notNull: true 
        }
        },
        {
            timestamps: false,
            freezeTableName: true

        });
        return Inventory;
};