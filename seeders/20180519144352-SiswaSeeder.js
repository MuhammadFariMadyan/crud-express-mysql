'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('siswas', [{
        nama: 'John Doe',
        gender: 'Pria',
        no_telp: '089070709090',
        alamat: 'Rajabasa',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('siswas', null, {});
  }
};
