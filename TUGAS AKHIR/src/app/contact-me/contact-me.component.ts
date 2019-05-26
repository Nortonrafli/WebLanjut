import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.css"]
})
export class ContactMeComponent implements OnInit {
// array
  ar_tampil=[]

  form = new FormGroup({
    nama: new FormControl(""),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    ]),
    comment: new FormControl("")
  });

  get nama() {
    return this.form.get("nama");
  }
  get email() {
    return this.form.get("email");
  }
  get comment() {
    return this.form.get("comment");
  }

  constructor() {}
  onSubmit(){
  //  variable tambah
    let tambah={
      nama:this.nama.value,
      email:this.email.value,
      comment:this.comment.value
    }
    this.ar_tampil.push(tambah)
  }
  ngOnInit() {}
}

