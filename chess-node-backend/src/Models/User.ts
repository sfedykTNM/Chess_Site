//user model
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("users", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {timestamps: false, freezeTableName:true, schema: 'users'},)
}