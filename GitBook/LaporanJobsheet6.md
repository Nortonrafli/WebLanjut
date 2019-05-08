# 06. Template Driven Forms

### Praktikum – Bagian 1: Membuat Form Bootstrap

* Buatlah sebuah component dengan nama contact dengan kode ``ng g c contact`` 

![](image/Jobsheet6/1.PNG)

* Buka file **contact.component.html** dan tambahkan code berikut :

![](image/Jobsheet6/2.PNG)

* Buka file **app.component.html** dan tambahkan code berikut :

![](image/Jobsheet6/3.PNG)

* Jalankan servernya maka hasilnya seperti berikut

![](image/Jobsheet6/4.PNG)

### Praktikum – Bagian 2: Macam-Macam Form

* Generate 2 buah component dengan nama ``reactive-form`` dan ``template-driven``

![](image/Jobsheet6/5reactive.PNG)

![](image/Jobsheet6/6template.PNG)

* Buka file reactive-form.component.html dan buatlah code seperti berikut

![](image/Jobsheet6/7.PNG)

* Buka file app.component.html dan tambahkan code berikut

![](image/Jobsheet6/8.PNG)

* Jalankan servernya maka hasilnya seperti berikut

![](image/Jobsheet6/8hasil.PNG)

* Buatlah sebuah interface dengan nama ``mahasiswa.interface.ts`` di dalam folder app dan tambahkan code berikut

![](image/Jobsheet6/9.PNG)

* Dikarenakan untuk menggunakan reactive-forms diperlukan **FormBuilder** dan **FormGroup** dari module ``ReactiveFormsModule`` maka kita harus tambahkan ReactiveFormModule dan FormGroup pada file ``app.module.ts`` seperti pada gambar berikut

![](image/Jobsheet6/10.PNG)

* buka file **reactive-form.component.ts**, import terlebih dahulu **FormBuilder** dan **FormsGroup** dan tambahkan beberapa code berikut

![](image/Jobsheet6/11.PNG)

* Buka file **reactive-form.component.html** dan modifikasi codenya menjadi seperti berikut

![](image/Jobsheet6/13.PNG)

* Jalankan servernya maka hasilnya seperti berikut

![](image/Jobsheet6/14.PNG)

![](image/Jobsheet6/15.PNG)

* Untuk template-driven kita membutuhkan **FormsModule** pada app.module.ts, jadi buka file **app.module.ts** dan tambahkan FormsModule

![](image/Jobsheet6/12.PNG)

* Buka file **template-driven.componentn.ts** dan tambahkan struktur form seperti berikut

![](image/Jobsheet6/16.PNG)

* buka file **template-driven.component.html** dan tambahkan code berikut

![](image/Jobsheet6/17.PNG)

* Tambahkan method onSubmit pada **template-driven.component.ts**

![](image/Jobsheet6/18.PNG)

* Buka file **app.component.html** tambahkan code berikut

![](image/Jobsheet6/19.PNG)

* Jalankan servernya maka hasilnya seperti berikut

![](image/Jobsheet6/21.PNG)

![](image/Jobsheet6/22.PNG)

### Praktikum – Bagian 3: ngModel
ngModel adalah sebuah directive untuk binding data atau value ke variable

* Buka file **contact-form.component.html** dan tambahkan ngmodel seperti berikut

![](image/Jobsheet6/23.PNG)

* Buka file **contact-form.component.ts** dan tambahkan decorator input

![](image/Jobsheet6/24.PNG)

* Jalankan servernya dan terdapat pesan error seperti pada gambar berikut

![](image/Jobsheet6/25.PNG)

Keterangan : hal ini disebabkan jika kita menggunakan ngModel maka kita harus menambahkan atribut name pada tag tersebut

* Tambahkan atribut name pada tag input pada file **contact.component.html**

![](image/Jobsheet6/26.PNG)

* Jalankan servernya maka hasilnya seperti berikut
(Catatan : tidak perlu diklik button untuk menampilkan data karena
tidak menggunakan event binding jadi inputan akan langsung tampil saat user memasukan data)

![](image/Jobsheet6/27.PNG)

Selain itu juga dapat melihat properties pada ngModel

* Buka file contact.component.html modifikasi code berikut ini

![](image/Jobsheet6/28.PNG)

* Pada textarea tambahkan juga ngModel seperti gambar berikut

![](image/Jobsheet6/28a.PNG)

* Buka file contact.component.ts modifikasi code berikut ini

![](image/Jobsheet6/29.PNG)

* Jalankan server dan lihat pada inspect maka akan muncul property dari ngModel

![](image/Jobsheet6/30.PNG)

### Praktikum – Bagian 4: Validasi
Membuat sebuah validasi dengan menggunakan bantuan directive

* Buka file **contact.component.html** dan tambahkan code ``required`` seperti gambar berikut

![](image/Jobsheet6/31.PNG)

* Jalankan localhost dan lihat hasilnya

![](image/Jobsheet6/32.PNG)

* Jika kita jalankan maka secara default alert akan muncul. Untuk itu kita membutuhkan sebuah kondisi lagi. Buka file **contact.component.html** tambahkan code berikut

![](image/Jobsheet6/33.PNG)

* Jalankan localhost pada saat dijalankan maka secara default alert tidak akan muncul dan pada saat field nama dikosongkan maka akan muncul alert “Nama harus diisi”

![](image/Jobsheet6/34.PNG)

![](image/Jobsheet6/35.PNG)

### Praktikum – Bagian 5: Spesific Validasi Error
Ada beberapa macam untuk validasi error seperti minlength, maxlength, pattern dan required.

* Buka file conctact.component.html dan tambahkan beberapa code berikut

![](image/Jobsheet6/36.PNG)

* Jalankan localhost jika kita masukkan angka 1

![](image/Jobsheet6/37.PNG)
![](image/Jobsheet6/38.PNG)

### Praktikum – Bagian 6: Styling Invalid Input Field
Kita dapat menambahkan sebuah style pada input fieldnya sebagai contoh jika terdapat error maka akan menampilkan.

* Buka file **contact.component.css** dan tambahkan code berikut

![](image/Jobsheet6/39.PNG)

* Jalankan localhost jika kita inputkan salah

![](image/Jobsheet6/40.PNG)

### Praktikum – Bagian 7: ngForm
ngForm adalah directive Angular yang penting untuk membuat template-driven forms.

* Buka file **contact.component.ts** dan tambahkan sebuah method submit seperti pada gambar berikut

![](image/Jobsheet6/41.PNG)

* Buka file **contact.component.html** dan buatlah sebuah template variabel ngForm atau property ngForm dengan nama form (#form) yang nanti digunakan sebagai parameter dari method submit seperti pada gambar berikut 

![](image/Jobsheet6/42.PNG)

* Pada button rubah codenya menjadi seperti berikut 

![](image/Jobsheet6/43.PNG)

* Jalankan localhost dan inspect element,  masukkan pada field nama adalah pisang 

![](image/Jobsheet6/44.PNG)

### Praktikum – Bagian 8: ngModelGroup

* buka file **contact.component.html** dan tambahkan code  seperti berikut 

```html
<div ngModelGroup="contact" #contact="ngModelGroup"></div>
          <div *ngIf="contact.value">contoh validasi pada ngModelGroup</div>
```

### Praktikum – Bagian 9: Disabling the Submit Button
Kita dapat membuat atau mengkondisikan button submit seperti button submit tidak akan dapat diklik jika nilai validnya sama dengan false

* Buka file **contact.component.html** dan tambahkan code berikut pada tag button

![](image/Jobsheet6/45.PNG)

* Jalankan localhost jika berhasil secara default button akan disable, button akan enable saat terdapat inputan

![](image/Jobsheet6/46.PNG)
![](image/Jobsheet6/47.PNG)

### Praktikum – Bagian 10: Bekerja dengan Check Box

* Buka file contact.component.html dan tambahkan code check box seperti pada gambar berikut

![](image/Jobsheet6/48.PNG)

* Jalankan localhost

![](image/Jobsheet6/49.PNG)

### Praktikum – Bagian 11: Bekerja dengan Drop-down List
Selain menggunakan check box kita juga dapat menggunakan dropdown list

* Buka file **contact.component.html** tambahkan code untuk ``dropdown list`` seperti pada gambar berikut 

![](image/Jobsheet6/50.PNG)

* Buka file **contact.component.ts** dan tambahkan code berikut 

![](image/Jobsheet6/51.PNG)

* Jalankan localhost maka hasilnya seperti berikut

![](image/Jobsheet6/52.PNG)

![](image/Jobsheet6/53.PNG)

* Selain itu kita juga dapat menampilkan property id dan property nama dengan menggunakan property ngValue seperti berikut

![](image/Jobsheet6/54.PNG)

* Sehingga hasilnya seperti berikut

![](image/Jobsheet6/55.PNG)

* Selain itu juga kita dapat menggunakan multiple jika ingin memilih keduanya seperti pada gambar berikut

![](image/Jobsheet6/56.PNG)

* Sehingga hasilnya seperti berikut (tekan control untuk dapat memilih keduanya)

![](image/Jobsheet6/57.PNG)

### Praktikum – Bagian 12: Bekerja dengan Radio Button
Selain menggunakan check box dan dropdown list kita juga dapat menggunakan radio button

* buka file contact.component.html dan tambahkan code berikut

![](image/Jobsheet6/58.PNG)

* Jalankan localhost (menggunakan ngModel)

![](image/Jobsheet6/59.PNG)

* Jalankan localhost (tidak menggunakan ngModel)



* Bisa juga menggunakan directive ngFor untuk menampilkan value seperti berikut

![](image/Jobsheet6/60.PNG)

* Sehingga hasilnya juga sama

![](image/Jobsheet6/61.PNG)
