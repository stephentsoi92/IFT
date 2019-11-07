module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define('Products', {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        product_sku: {
            type: DataTypes.STRING,
            notNull: true
        },
        product_asin: {
            type: DataTypes.STRING,
            notNull: true
        },
        product_name: {
            type: DataTypes.STRING,
            notNull: true
        }
    },
    {
        timestamps: false
    });

    Products.associate = function(models) {
        Products.hasMany(models.ForecastAssumptions, {
            foreignKey: 'product_id'
        })
    
        Products.hasMany(models.Inventory, {
            foreignKey: 'product_id',
            constraints: true
        });

        // Create many-to-many relationship with Transactions model. Creates a join table name Orders.
    Products.belongsToMany(models.Transactions, {
        through: {
            model: models.Orders,
            unique: false
        },
        foreignKey: 'product_id',
        constraints: true
    });
};
    return Products;
}