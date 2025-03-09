// Inisialisasi aplikasi Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Data dokter sementara
let dokter = [
    {
      id: 1,
      nama: "dr. Ahmad Wijaya",
      spesialisasi: "Jantung",
      nomorLisensi: "IDI-12345678",
      jadwalPraktek: "Senin-Rabu, 08.00-14.00"
    },
    {
      id: 2,
      nama: "dr. Siti Rahma",
      spesialisasi: "Anak",
      nomorLisensi: "IDI-23456789",
      jadwalPraktek: "Senin-Jumat, 09.00-15.00"
    },
    {
      id: 3,
      nama: "dr. Budi Santoso",
      spesialisasi: "Bedah Umum",
      nomorLisensi: "IDI-34567890",
      jadwalPraktek: "Selasa-Kamis, 08.00-16.00"
    },
    {
      id: 4,
      nama: "dr. Anita Kusuma",
      spesialisasi: "Kulit",
      nomorLisensi: "IDI-45678901",
      jadwalPraktek: "Rabu-Jumat, 10.00-17.00"
    }
  ];
  
  app.get('/', (req, res) => {
    res.send('Selamat datang di API Dokter Rumah Sakit Universitas Syiah Kuala!');
  });