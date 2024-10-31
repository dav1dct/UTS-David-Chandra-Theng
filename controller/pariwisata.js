const Pariwisata = require("../model/pariwisata");


const createPariwisata = (req, res) => {
    const pariwisata = new Pariwisata({
        namaTempat: req.body.namaTempat,
        wisata: req.body.wisata,
        jumlahPengunjung: req.body.jumlahPengunjung
    });
    pariwisata.save().then((createdPariwisata) => {
        res.status(201).json({
            message: "Data berhasil disimpan",
            pariwisataId: createdPariwisata._id
        });
    }).catch((err) => {
        res.status(500).json({
            message: "internal server error"
        });
    });


};
module.exports = {createPariwisata}