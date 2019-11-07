module.exports = function(sequelize, DataTypes) {
    const TransactionTypes = sequelize.define('TransactionTypes', {
        transaction_type_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        transaction_type: {
            type: DataTypes.STRING,
            notNull: true
        }
    },
    {
        timestamps: false
    });

    TransactionTypes.associate = function(models) {
        TransactionTypes.hasMany(models.Transactions, {
            foreignKey: 'transaction_type_id'
        });
    }

    return TransactionTypes;
}