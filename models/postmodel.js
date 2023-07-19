
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post",
    {   
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        body:{
            type:DataTypes.STRING,
        }

    });
    return Post
}