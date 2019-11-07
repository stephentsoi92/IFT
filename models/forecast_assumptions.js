module.exports = function(sequelize, DataTypes) {
    const ForecastAssumptions = sequelize.define('ForecastAssumptions', {
        assumption_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sales_growth:{
            type: DataTypes.DECIMAL(10, 2)
        },
        month: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 12
            }
        }
    },
    {
        timestamps: false
    });

    ForecastAssumptions.associate = function(models) {
        ForecastAssumptions.hasOne(models.ForecastOutput, {
            foreignKey: 'assumption_id'
        });
    };

    return ForecastAssumptions;
}