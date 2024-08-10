const nama = "Putra Pradana";
let usia = 17;

console.log(`Namaku ${nama} dan Usiaku ${usia} Tahun`)

function generateBiodataku() {
    if (usia > 0 && usia < 10) {
        console.log(`Anda Masih Anak Anak`)
    }
    else if (usia > 10 && usia < 20) {
        console.log(`Anda Remaja`)
    }
    else if (usia > 20 && usia < 30) {
        console.log(`Anda Dewasa`)
    }
    else if (usia > 30 && usia < 40) {
        console.log(`Anda Tua`)
    }
    else console.log(`Anda Siapa??`)
}

generateBiodataku();