'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.articles, {
      foreignKey: 'article_id'
    })
    comment.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
  };
  return comment;
};