# 05. Directive

### Praktikum – Bagian 1: ngIf

##### Cara Pertama

* Buka file **courses.component.ts** kemudian tambahkan code seperti berikut:

![](image/Jobsheet5/1.PNG)

* Buka file **courses.component.html** lalu tambahkan code seperti berikut:

![](image/Jobsheet5/2.PNG)

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/3.PNG)

* Jika array pada file **app.component.ts** (courses=[];) dikosongkan maka hasilnya:

![](image/Jobsheet5/4.PNG)

##### Cara Kedua
* buka file **app.component.html** modifikasi kodenya menjadi berikut:

![](image/Jobsheet5/7.PNG)

* jalankan localhost dengan kondisi array pada file **app.component** dengan array kosong

![](image/Jobsheet5/1a.PNG)

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/5.PNG)

* Array yang ada isinya 

![](image/Jobsheet5/1.PNG)

* Hasilnya seperti berikut:

![](image/Jobsheet5/6.PNG)

##### Cara Ketiga
* buka file **app.component.html** modifikasi kodenya menjadi berikut:

![](image/Jobsheet5/8.PNG)

* jalankan localhost dengan kondisi array pada file **app.component** dengan array kosong

![](image/Jobsheet5/1a.PNG)

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/5.PNG)

* Array yang ada isinya 

![](image/Jobsheet5/1.PNG)

* Hasilnya seperti berikut:

![](image/Jobsheet5/6.PNG)

### Praktikum – Bagian 2: Hidden Property

* buka file **app.component.html** modifikasi kodenya menjadi berikut:

![](image/Jobsheet5/11hiddden.PNG)

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/12.PNG)

*  Selain contoh diatas kita juga dapat memberikan property seperti berikut:

![](image/Jobsheet5/13.PNG)

* Dengan catatan pada app.component.ts pada courses terdapat array courses dengan nilai 1 dan 2

![](image/Jobsheet5/1.PNG)

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/10.PNG)

* Jika kita inspect element maka akan terlihat property hidden tidak terdapat kondisi true ataupun false

![](image/Jobsheet5/14.PNG)

* Berbeda jika kita menggunakan ngIF terdapat bindings dengan nilai false

![](image/Jobsheet5/15.PNG)

### Praktikum - Bagian 3: ngSwitchCase
Menyediakan ekspresi switch untuk menyamakan dengan ekspresi ngSwitch yang tersedia. Ketika ekspresi sama, maka template NgSwitchCase menampilkan.

* Buka file **app.component.html** modifikasi codenya menjadi seperti berikut:

![](image/Jobsheet5/16ngSwitchCase.PNG)

* Buka file **app.component.ts** tambahkan property viewMode (line 12)

![](image/Jobsheet5/17.PNG)

*  Hasilnya seperti berikut saat diklik list view maka akan muncul list view content dan jika kita pilih ListView maka akan tampil tulisan List View Content

![](image/Jobsheet5/20.PNG)

### Bagian 4: ngFor
ngFor adalah sebuah directive pada angular yang berfungsi untuk melakukan looping terhadap beberapa data misal data kita adalah sebuah array, jadi directive ini akan melopping array kita pada bagian template.

* Buka **app.component.ts** property CoursesFor yang berisikan array (line 12)

![](image/Jobsheet5/22.PNG)

* buka file **app.component.html** tambahkan directive ngFor

![](image/Jobsheet5/21.PNG) 

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/23.PNG)

* kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil dengan menggunakan isEven ``https://angular.io/api/common/NgForOf``

![](image/Jobsheet5/25.PNG)

### Bagian 5: ngFor dan change Detection
Dengan memodifikasi directive ngFor kita dapat melakukan penambahan atau pengurangan data.

* Pada percobaan ini kita akan menambahkan sebuah data array pada coursesFor, tambahkan button pada **app.component.html**

![](image/Jobsheet5/26.PNG)

* tambahkan method onAdd(), pada file **app.component.ts**

![](image/Jobsheet5/27.PNG)

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/28.PNG)

jika kita tekan button add maka akan ditambahkan sebuah data courses 6

![](image/Jobsheet5/29.PNG)

* Tambahkan sebuah method onRemove pada **app.component.ts** untuk melakukan penghapusan data

![](image/Jobsheet5/31.PNG)

* Buka **app.component.html** dan tambahkan sebuah button untuk menghapus

![](image/Jobsheet5/30.PNG)

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/32.PNG)

jika kita tekan button remove maka salah satu data akan hilang sementara

![](image/Jobsheet5/33.PNG)

* buka file **app.component.html** tambahkan button

![](image/Jobsheet5/34.PNG)

* buka file **app.component.ts** buatlah sebuah method ``onChange`` dengan parameter item dan didalam method tersebut adanya perubahan string menjadi ``updated``

![](image/Jobsheet5/35.PNG)

* Jalankan localhost maka hasilnya seperti berikut:

![](image/Jobsheet5/36.PNG)

jika kita tekan button update maka salah satu data akan berubah menjadi update

![](image/Jobsheet5/37.PNG)

### Praktikum – Bagian 6: ngFor dan Trackby

* Buka file **app.component.ts** buatlah sebuah method dengan nama ``loadCourses``, tapi sebelumnya buat sebuah property dengan nama ``coursesForOne``

![](image/Jobsheet5/40.PNG)

* Buka file **app.component.html** dan tambahkan code seperti pada gambar

![](image/Jobsheet5/39.PNG)

* Hasilnya saat button belum diclick

![](image/Jobsheet5/41.PNG)

* Hasilnya saat button sudah diclick

![](image/Jobsheet5/42.PNG) 

* Saat button belum diclick seperti pada gambar berikut

![](image/Jobsheet5/43.PNG) 

* Dan saat button diklik maka element ul akan muncul seperti pada gambar berikut

![](image/Jobsheet5/44.PNG) 

* Untuk menambahkan TrackBy dengan cara menambahkan pada file **app.component.html** pada directive ngFor

![](image/Jobsheet5/45.PNG)

* Tambahkan juga sebuah method ``trackCourse`` dengan parameter index dan itemone pada file **app.component.ts**

![](image/Jobsheet5/46.PNG)

### Praktikum – Bagian 7: The leading Asterik
Leading Asterik adalah tanda asterisk yang ada pada directive seperti *ngFor dsb. Adapun maksud leading asterisk pada sebuah directive adalah bahwa kita memberi tahu angular untuk menulis ulang markup tertentu

![](image/Jobsheet5/47.PNG)
![](image/Jobsheet5/48.PNG)

### Bagian 8: ngClass
jika pada percobaan sebelumnya kita membuat component favorite menggunakan 2 class binding yaitu class binding fa-star dan fa-star-o

![](image/Jobsheet5/49.PNG)

### Bagian 9: Custom Directive

* Membuat directive dengan nama input-format terlebih dahulu dengan perintah seperti berikut

![](image/Jobsheet5/50.PNG)

* Jika directive berhasil digenerate maka kita pastikan di **app.module.ts pada** ``@NgModule`` terdapat nama directive yang kita buat tadi

![](image/Jobsheet5/51.PNG)

* Buka **input-format.directive.ts** dan tambahkan decorator HostListener seperti pada gambar berikut

![](image/Jobsheet5/52.PNG)

* Buka file **app.component.html** dan tambahakn code berikut

![](image/Jobsheet5/53.PNG)

* Pada saat kita click pada textbox maka pada console akan muncul onFocus tetapi jika click diluar textbox maka console akan keluat onBlur

![](image/Jobsheet5/54.PNG)

* Buka file **input-format.directive.ts** dan modifikasi codenya menjadi berikut

![](image/Jobsheet5/61.PNG)

* Jalankan localhost dan berikan masukan dengan huruf besar semua setelah itu tekan tab, jika berhasil maka valuenya akan berubah menjadi huruf kecil semua

![](image/Jobsheet5/55.png)
![](image/Jobsheet5/56.png)

* Buka file **app.component.html** dan tambahkan property binding dengan nama format

![](image/Jobsheet5/57.PNG)

* Buka file **input-format.directive.ts** tambahkan decorator input dan modifikasi codenya seperti pada gambar berikut

![](image/Jobsheet5/58.PNG)

* Format disini adalah kondisi di **app.component.html**

![](image/Jobsheet5/59.PNG)

* Buka **input-format.directive.ts** dan tambahkan decorator input dengan parameter appInputFormat

![](image/Jobsheet5/60.PNG)