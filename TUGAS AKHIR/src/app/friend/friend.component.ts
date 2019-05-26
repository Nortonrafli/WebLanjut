import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FilterPipe } from 'ngx-filter-pipe';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  //untuk mengecek kesalahan
  log(z) {
      console.log(z);
    }
//data yang pasti ada di field 
    coursesForOne=[
      {id:1, name:'Norton', email:'Nortonrafli@icloud.com', contact:'082232185004'}
      ]
    userFilter: any = {name: '' };

//nambah friend
    submit(form){
      this.coursesForOne.push({id: this.coursesForOne.length + 1, name: this.uppercase(form.nama), email: form.email, contact: form.contact});
      form.valid;
     }

//huruf kecil pada nama jadi besar semua
     uppercase(nama){
      return nama.toUpperCase();
    }
//searching
    constructor(private filterPipe: FilterPipe){
      console.log(filterPipe.transform(this.coursesForOne, {email: ''}));
    }
  }