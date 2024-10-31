const Mahasiswa = require("../model/pariwisata");


const createMahasiswa = (req, res) => {
    const mahasiswa = new Mahasiswa({
        namaTempat: req.body.namaTempat,
        wisata: req.body.wisata,
        jumlahPengunjung: req.body.jumlahPengunjung
    });
    mahasiswa.save().then((createdMahasiswa) => {
        res.status(201).json({
            message: "Data berhasil disimpan",
            mahasiswaId: createdMahasiswa._id
        });
    }).catch((err) => {
        res.status(500).json({
            message: "internal server error"
        });
    });


};
module.exports = {createMahasiswa}