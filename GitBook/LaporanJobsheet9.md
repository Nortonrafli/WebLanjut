# 09. HTTP Service

### Praktikum – Bagian 1: JSONPlaceHolder

### Praktikum - Bagian 2 : Getting Data

* Buat component baru dengan nama signup-form dengan perintah ``ng g c posts``

![](image/Jobsheet9/1.png)

* Untuk menggunakan ``HTTPService``, kita perlu melakukan ``import HttpModule`` pada file **app.module.ts**.

![](image/Jobsheet9/1a.png)

Setelah kita menambahkan HttpModule pada bagian imports maka secara otomatis akan menambah imports pada bagian paling atas 

![](image/Jobsheet9/1b.png)

Hint :
Jika HttpModule tidak muncul secara otomatis maka anda harus menginstal terlebih dahulu dengan perintah ``npm i @angular/http``
 
Setelah ``@angular/http`` terinstall, maka anda dapat menjalankan praktikum pada langkah 2.

![](image/Jobsheet9/2.png)

* Modifikasi file **posts.component.ts** menjadi seperti berikut:
Class Http pada contructor digunakan untuk melakukan HTTP request ke back end.

![](image/Jobsheet9/2a.png)

* Ubah file **app.component.html** seperti berikut :

![](image/Jobsheet9/2b.png)

* Jalankan dan Catat hasilnya **(soal 1)**

![](image/Jobsheet9/3.JPG)

* Bagaimana jika anda lupa melakukan import HttpModule pada langkah ke-2 ? Lakukan commenting pada HttpModule seperti pada kode berikut :

![](image/Jobsheet9/3a.PNG)

* Apa yang terjadi pada console? Berikan penjelasan atas error yang terjadiApa yang terjadi pada console? Berikan penjelasan atas error yang terjadi

![](image/Jobsheet9/4.JPG)

* Lengkapi kode program pada file **posts.component.ts** menjadi :

![](image/Jobsheet9/4a.JPG)

* Jalankan pada browser dan jelaskan yang muncul pada console. **(soal 3)**

![](image/Jobsheet9/5.JPG)

* Jelaskan perbedaan yang terjadi pada console jika kode pada file **posts.component.ts** diubah menjadi : **(soal 4)**

![](image/Jobsheet9/soal4.JPG)

* Untuk menampilkan data pada halaman browser, ubah kode program pada **posts.component.html** seperti berikut :

![](image/Jobsheet9/5a.PNG)

* Ubah kode program pada **posts.component.ts** :

![](image/Jobsheet9/5b.PNG)

* Jalankan dan jelaskan apa yang muncul pada browser. **(soal 5)**

![](image/Jobsheet9/soal5.JPG)

### Praktikum - Bagian 3 : Creating Data

* Kita akan menambahkan sebuah text area untuk memasukkan data melalui browser, seperti gambar berikut :

![](image/Jobsheet9/soal6.JPG)

* Pertama, tambahkan input elemen pada file **posts.component.html** :

![](image/Jobsheet9/6.PNG)

* Modifikasi kode program pada file **posts.component.ts**

![](image/Jobsheet9/6a.PNG)

* Simpan dan Jalankan. Jelaskan dengan kalimatmu sendiri bagaimana jalannya program setiap baris pada fungsi ``createPost``. **(soal 6)**

![](image/Jobsheet9/soal6.JPG)

### Praktikum - Bagian 4 : Updating Data

* Kita akan menambahkan sebuah button ``Update`` untuk mengubah data melalui browser, seperti gambar berikut :

![](image/Jobsheet9/soal7.JPG)

* Tambahkan button ``Update`` dengan modifikasi kode program seperti di bawah ini :

![](image/Jobsheet9/7.PNG)

* Tambahkan fungsi **updatePost** pada posts.ts seperti di bawah :

![](image/Jobsheet9/7a.PNG)

* Simpan dan Jalankan. Apa fungsi patch pada potongan kode program pada langkah 3? **(soal 7)**

![](image/Jobsheet9/soal7.JPG)

### Praktikum - Bagian 5 : Deleting Data

* Kita akan menambahkan sebuah button Delete di sebelah button Update untuk menghapus data melalui browser, seperti gambar berikut :
 
![](image/Jobsheet9/soal8.JPG)

* Tambahkan button ``Delete`` dengan modifikasi kode program seperti di bawah ini :
 
![](image/Jobsheet9/8.PNG)

* Tambahkan fungsi **deletePost** pada posts.ts seperti di bawah :

![](image/Jobsheet9/8a.PNG)

* Simpan dan Jalankan. Apa fungsi patch pada potongan kode program pada langkah 3? **(soal 8)**

![](image/Jobsheet9/soal8.JPG)

![](image/Jobsheet9/9.PNG)

