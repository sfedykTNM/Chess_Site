const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:123@host.docker.internal:5432/postgres');

//checking if connection is done
sequelize.authenticate().then(() => {
    console.log(`Connection Established`);
}).catch((err) => {
    console.log(err);
})

const db = {
    Sequelize: undefined,
    sequelize: undefined,
    users: Object
}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./User.ts') (sequelize, DataTypes)

//exporting the module
module.exports = db