//kondisi1//

const nilai = 75;

if (nilai <= 90) {
    console. log("Anda lulus ujian.")
}else {
    console.log("Anda tidak lulus ujian.");
}

const suhu = 10;

if (suhu >= 30) {
    console. log("kedinginan.")
}else {
    console.log("kepanasan.");
}

const tinggi_badan = 120;

if (tinggi_badan <= 130) {
    console. log("sudah tinggi. ")
}else {
    console. log("belum tinggi.");
}

const kecepatan_mobil = 1900;

if (kecepatan_mobil <= 1700) {
    console. log("cepat.")
}else {
    console. log(" lambat.");
}

const jam_tidur = 21_00;

if (jam_tidur >= 23_00) {
    console. log("ayo segera tidur.");
}else {
    console. log("jangan begadang.");
}

///ternaryanswer///

//angka//          
var angka = 10;//memahami nilai var//
const hasil = (angka >= 8) ? "Positif" : "Negatif";
console.log(hasil);//?=if, :=else// 


//suhu//
var x=22;
const derajat = x > 20 ? "Panas": "Dingin";

//usia//
var y=19;
const umur = y > 20 ? "Dewasa": "Anak-anak";

//tinggi//
var z=167;
const tinggi = z > 165 ? "Tinggi": "Pendek";

//berat badan//
var r=45;
const berat = r > 55 ? "Di Atas Rata-rata": "Di Bawah Rata-rata";

//kode untuk menampilkan hasil//
console.log(hasil)
console.log(derajat)
console.log(umur)
console.log(tinggi)
console.log(berat)



///ternarywithif///

//nilai//
var i= 46;//variabel yang ingin dimasukkan//
const ternarywithif = i > 80 ? "Lulus" : i < 65? "Remidi": "Tidak Lulus";//?=kemungkinan pertama(if),:=if else, : terakhir=else//

//suhu//
var x= 21;
const celsius = x > 25 ? "Panas" : x > 20? "Normal": "Dingin";

//usia//
var y= 20;
const lama = i > 60 ? "Lansia" : i > 20? "Dewasa": "Anak-anak";

//tinggi badan//
var z= 155;
const pendek = z > 165 ? "Tinggi" : z > 150? "Normal": "Pendek";

//berat badan//
var r= 50;
const ringan = r > 80 ? "Obesitas"  : r > 45? "Normal": "Kurang Gizi";

//kode untuk menampilkan hasil//
console.log(ternarywithif)
console.log(celsius)
console.log(lama)
console.log(pendek)
console.log(ringan)
