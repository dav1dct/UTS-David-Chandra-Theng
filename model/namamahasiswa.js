const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
    nama: { type: String, required: true },
    alamat: { type: String, required: true },
    umur: { type: String, required: true }
});


module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);