'use strict';
module.exports = (sequelize, DataTypes) => {
  var siswas = sequelize.define('siswas', {
    nama: DataTypes.STRING,
    gender: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    alamat: DataTypes.STRING,
  }, {
    underscored: true,
  });
  siswas.associate = function(models) {
    // associations can be defined here
  };
  return siswas;
};