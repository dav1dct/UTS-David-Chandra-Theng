var express = require('express');
var router = express.Router();
const MahasiswaController = require("../controller/namamahasiswa")

/* GET users listing. */
//format JSON
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Mahasiswa' });
});
router.post('/', (req, res) => {
    const mahasiswa = new Mahasiswa({
        namaTempat: req.body.namaTempat,
        wisata: req.body.wisata,
        jumlahPengunjung: req.body.jumlahPengunjung
    });


    console.log(mhasiswa);
    mahasiswa.save().then((createdMahasiswa) => {
        res.status(201).json({
            message: "Data berhasil disimpan",
            mahasiswaId: createdMahasiswa._id
        });
    });
});
router.post('/', MahasiswaController.createMahasiswa);

module.exports = router;