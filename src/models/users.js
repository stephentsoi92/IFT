module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define('Users', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            notNull: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING,
            notNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            notNull: true
        }
    },
    {
        timestamps: false
    });

    return Users;
}