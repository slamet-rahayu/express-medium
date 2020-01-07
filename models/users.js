'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
//     Users.hasMany(models.articles, {
//       foreignKey: 'author_id'
//     })
  };
  return Users;
};
