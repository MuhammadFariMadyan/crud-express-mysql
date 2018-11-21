# Express JS CRUD MySQL

Membuat CRUD Data Siswa dengan Express JS dan MySQL

## Cara instalasi :
1. clone repo ini.
2. masuk ke dalam folder project ini.
3. ketikkan perintah `npm install` atau `yarn install`.
4. pastikan anda sudah menginstall 'sequelize-cli' secara global.
5. ketikkan perintah `sequelize db:create` untuk membuat database, tapi pastikan pengaturan database sudah sesuai dengan pengaturan database anda, cek di file 'config/config.json' untuk memastikan nama db dan password nya.
6. ketikkan perintah `sequelize db:migrate` untuk membuat struktur table.
7. ketikkan perintah `sequelize db:seed:all` untuk memasukkan sample data ke dalam table database.
8. ketikkan perintah `npm start` atau `yarn start` untuk menjalankan project.
9. Buka browser dengan alamat 'http://localhost:3000'.
10. Selesai.
