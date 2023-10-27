# Express JS CRUD MySQL
#### Mudah Banget! Membuat CRUD Data Siswa dengan Express JS dan MySQL / Postgres*, gini caranya:

## Persyaratan
1. Gunakan NodeJs versi dibawah v14, rekomendasi node versi adalah v12.22.12.
2. Install sequelize dan nodemon secara global dengan command berikut:
    ```
    npm install sequelize-cli -g
    npm install nodemon -g
    ```
3. Pastikan konfigurasi database anda sudah benar, dan pastikan database anda sudah di running.

## Cara instalasi
1. Clone repo ini.
2. Masuk ke dalam folder project ini.
3. Ketikkan perintah `npm install` atau `yarn install`.
4. Pastikan anda sudah menginstall 'sequelize-cli' secara global.
5. Ketikkan perintah `sequelize db:create` untuk membuat database, tapi pastikan pengaturan database sudah sesuai dengan pengaturan database anda, cek di file 'config/config.json' untuk memastikan nama db dan password nya.
6. Ketikkan perintah `sequelize db:migrate` untuk membuat struktur table.
7. Ketikkan perintah `sequelize db:seed:all` untuk memasukkan sample data ke dalam table database.
8. ketikkan perintah `npm start` atau `yarn start` untuk menjalankan project.
9. Buka browser dengan alamat 'http://localhost:3000'.
10. Happy Hacking.
