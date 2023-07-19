const dbconfig = require('../config/dbconfig.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
});

sequelize.authenticate().then(()=>{
    console.log("connected")
}).catch(err =>{
    console.log("error "+ err)
})


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.posts = require("../models/postmodel.js")(sequelize, DataTypes)

db.sequelize.sync({force:false}).then(()=>{
    console.log("re syn done")
})

module.exports = db
