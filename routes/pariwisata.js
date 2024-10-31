var express = require('express');
var router = express.Router();
const PariwisataController = require("../controller/pariwisata")

/* GET users listing. */
//format JSON
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Pariwisata' });
});
router.post('/', (req, res) => {
    const pariwisata = new Pariwisata({
        namaTempat: req.body.namaTempat,
        wisata: req.body.wisata,
        jumlahPengunjung: req.body.jumlahPengunjung
    });


    console.log(pariwisata);
    pariwisata.save().then((createdPariwisata) => {
        res.status(201).json({
            message: "Data berhasil disimpan",
            pariwisataId: createdPariwisata._id
        });
    });
});
router.post('/', PariwisataController.createPariwisata);

module.exports = router;