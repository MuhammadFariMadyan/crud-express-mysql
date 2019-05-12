var exports = module.exports = {};
const models = require('../models');
let Op = require("sequelize").Op;

exports.index = function (req, res) {
    let page = req.query.page || 1;
    let offset = 0;
    if (page > 1) {
        offset = ((page - 1) * 10) + 1;
    }
    models.siswas.findAndCountAll({
        limit: 10,
        offset: offset,
        order: [['id', 'DESC']],
    }).then((siswas) => {
        const alertMessage = req.flash('alertMessage');
        const alertStatus = req.flash('alertStatus');
        const alert = { message: alertMessage, status: alertStatus };
        const totalPage = Math.ceil(siswas.count / 10);
        const pagination = { totalPage: totalPage, currentPage: page };
        res.render('siswa/index', {
            siswa: siswas.rows,
            alert: alert,
            pagination: pagination
        });
    });
}

exports.create = function (req, res) {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus };

    let data = {
        name: req.flash('nama'),
        gender: req.flash('gender'),
        no_telp: req.flash('no_telp'),
        alamat: req.flash('alamat')
    };
    res.render('siswa/tambah', {
        alert: alert,
        data: data
    });
}
exports.createSiswa = function (req, res) {
    let siswaFound;
    models.siswas.create(req.body).then((siswa) => {
        siswaFound = siswa;
        req.flash('alertMessage', `Sukses Menambahkan Data Siswa dengan nama : ${siswaFound.nama}`);
        req.flash('alertStatus', 'success');
        res.redirect('/siswa');
    }).catch((err) => {
        req.flash('alertMessage', err.message);
        req.flash('alertStatus', 'danger');
        req.flash('name', req.body.nama);
        req.flash('name', req.body.gender);
        req.flash('name', req.body.no_telp);
        req.flash('name', req.body.alamat);
        res.redirect('/siswa/tambah');
    });
}
exports.edit = function (req, res) {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus };

    const id = req.params.id;
    models.siswas.findOne({ where: { id: { [Op.eq]: id } } }).then((siswa) => {
        res.render('siswa/edit', {
            alert: alert,
            siswa: siswa
        });
    });
}
exports.editSiswa = function (req, res) {
    const id = req.params.id;
    let siswaFound;
    models.siswas.findOne({ where: { id: { [Op.eq]: id } } }).then((siswa) => {
        siswaFound = siswa;
        return siswa.update(req.body).then(() => {
            req.flash('alertMessage', `Sukses Mengubah Data Siswa dengan nama : ${siswaFound.nama}`);
            req.flash('alertStatus', 'success');
            res.redirect('/siswa');
        })
    }).catch((err) => {
        req.flash('alertMessage', err.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/siswa');
    });
}
exports.hapusSiswa = function (req, res) {
    let id = req.params.id;
    let siswaFound;
    models.siswas.findOne({ where: { id: { [Op.eq]: id } } }).then((siswa) => {
        siswaFound = siswa;
        return siswa.destroy().then(() => {
            req.flash('alertMessage', `Sukses Menghapus Data Siswa dengan nama : ${siswaFound.nama}`);
            req.flash('alertStatus', 'success');
            res.redirect('/siswa');
        })
    }).catch((err) => {
        req.flash('alertMessage', err.message);
        req.flash('alertStatus', 'danger');
        res.redirect('/siswa');
    });
}

exports.notFound = function (req, res) {
    res.render('main/notfound');
}