const router = require('express').Router();
var siswaController = require('../controllers/siswaController.js');

  router.get('/', siswaController.index);
  router.get('/create', siswaController.create);
  router.post('/create', siswaController.createSiswa);
  router.get('/:id/edit', siswaController.edit);
  router.post('/:id/edit', siswaController.editSiswa);
  router.get('/delete/:id', siswaController.hapusSiswa);
  router.get('*', siswaController.notFound);

module.exports = router;