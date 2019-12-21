'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN
  }, {});
  categories.associate = function(models) {
    categories.hasMany(models.articles, {
      foreignKey: 'category_id'
    })
  };
  return categories;
};