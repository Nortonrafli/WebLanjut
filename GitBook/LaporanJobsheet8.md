# 08. Reactive Form

### Praktikum – Bagian 1: Building a Bootstrap Form

* Buat component baru dengan nama signup-form dengan perintah ``ng g c signup-form``

![](image/Jobsheet8/1.PNG)

* Modifikasi file **app.component.html** menjadi seperti berikut:

![](image/Jobsheet8/2.PNG)

* Modifikasi file **signup-form.component.html** menjadi seperti berikut:

![](image/Jobsheet8/3.PNG)

* Jalankan servernya maka hasilnya seperti berikut (soal 1):

![](image/Jobsheet8/4.PNG)


### Praktikum – Bagian 2: Control Programmatically

* Modifikasi file **signup-form.component.ts** seperti dibawah ini:
 
![](image/Jobsheet8/5.PNG)

* Modifikasi file **signup-form.component.html** menjadi seperti berikut:

![](image/Jobsheet8/6.PNG)

* Jalankan dan Catat hasil inspect elemen pada bagian console (soal 2), Akan muncul eror seperti berikut:

![](image/Jobsheet8/7.PNG)

![](image/Jobsheet8/7a.PNG)

* Modifikasi file **app.module.ts** tambahkan kode berikut:

![](image/Jobsheet8/8.PNG)

* Jalankan dan Catat hasilnya di bagian console pada browser (soal 3):

![](image/Jobsheet8/9.PNG)

### Praktikum - Bagian 3: Adding Validation 

* Modifikasi **signup-form.component.ts** menjadi seperti berikut:

![](image/Jobsheet8/10.PNG)

![](image/Jobsheet8/11.PNG)

* Modifikasi **signup-form.component.html** menjadi seperti berikut:

![](image/Jobsheet8/12.PNG)

* Jalankan, apakah validasi formnya berfungsi dan Catat hasilnya (soal 4) 

![](image/Jobsheet8/13.PNG)

* Tambahkan get username pada file **signup-form.component.ts** seperti berikut:

![](image/Jobsheet8/14.PNG)

* Modifikasi file **signup-form.component.html** menjadi seperti berikut:

![](image/Jobsheet8/15.PNG)

* Jalankan dan Catat hasilnya (soal 5)

![](image/Jobsheet8/16.PNG)

### Praktikum - Bagian 4: Specific Validation Errors

* Modifikasi **signup-form.component.ts** menjadi seperti berikut:

![](image/Jobsheet8/17.PNG)

* Modifikasi **signup-form.component.html** menjadi seperti berikut:
 
![](image/Jobsheet8/18.PNG)

![](image/Jobsheet8/19.PNG)

* Jalankan dan Catat hasilnya (soal 6)

![](image/Jobsheet8/20.PNG)

![](image/Jobsheet8/20a.PNG)

* Modifikasi **signup-form.component.html** menjadi seperti berikut:

![](image/Jobsheet8/21.PNG)

* Jalankan dan Catat hasilnya (soal 7)

![](image/Jobsheet8/22.PNG)

### Praktikum - Bagian 5: Custome Validation

* Buat file baru pada folder ``signup-form`` dengan nama file **username.validators.ts** dan isi dengan script sebagai berikut:

![](image/Jobsheet8/23.PNG)

* Modifikasi **signup-form.component.ts** menjadi seperti berikut:

![](image/Jobsheet8/24.PNG)

* Modifikasi **signup-form.component.html** menjadi seperti berikut:

![](image/Jobsheet8/25.PNG)

* Jalankan dan Catat hasilnya (soal 8)

![](image/Jobsheet8/26.PNG)

### Praktikum - Bagian 6: Asyncronus Validation

* Modifikas file **username.validators.ts** seperti berikut:
 
![](image/Jobsheet8/27.PNG)

* Modifikasi **signup-form.component.ts** menjadi seperti berikut:
 
![](image/Jobsheet8/28.PNG)

* Modifikasi **signup-form.component.html**, tambahkan ``<div>`` seperti berikut:

![](image/Jobsheet8/29.PNG)

*  Jalankan dan Catat hasilnya (soal 9)

![](image/Jobsheet8/30.PNG)


### Praktikum - Bagian 7: Displaying a Loader Image

* Modifikasi **signup-form.component.html**, tambahkan ``<div>`` seperti berikut:

![](image/Jobsheet8/32.PNG)

* Jalankan dan Catat hasilnya (soal 10)

![](image/Jobsheet8/31.PNG)

### Praktikum - Bagian 8: Validating Form on Submit

* Modifikasi **signup-form.component.ts**, dengan menambahkan method ``login()`` seperti berikut:
 
![](image/Jobsheet8/33.PNG)

* Modifikasi signup-form.component.html seperti berikut:
 
![](image/Jobsheet8/34.PNG)

* Jalankan dan Catat hasilnya (soal 11)

![](image/Jobsheet8/35.PNG)