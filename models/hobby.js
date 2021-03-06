'use strict';
module.exports = (sequelize, DataTypes) => {
  const hobby = sequelize.define(
    'hobby',
    {
      hobbylist: DataTypes.STRING,
    },

    { timestamps: false }
  );
  hobby.associate = function (models) {
    hobby.belongsToMany(models.users, {
      through: 'hobby_Data',
      foreignKey: 'hobbyId',
    });
  };
  return hobby;
};
