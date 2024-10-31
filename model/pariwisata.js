const mongoose = require("mongoose");

const pariwisataSchema = new mongoose.Schema({
    namaTempat : {type : String, required : true},
    wisata : {type : String, required : true},
    jumlahPengunjung : {type : String, required : true}
});


module.exports = mongoose.model("Pariwisata", pariwisataSchema);