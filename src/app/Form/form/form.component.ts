import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
// import {MatButtonModule} from '@angular/material/button';

import hobby from 'src/assets/json/hobbies.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  hobbies: { code: Number, label: string }[] = hobby;
  genders = ["Female", "Man"];

  constructor() {

  }

  ngOnInit(): void {

  }

  user = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    hobby: '',
    conditions: '',
  };
  submitted = false;
  isValidEmailAfterTyping;
  isChecked;

  isValidEmail(email) {
    const regex = /^[\w+\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    regex.test(email) ? this.isValidEmailAfterTyping = true : this.isValidEmailAfterTyping = false;
  }

  onCheckConditions(event) {
    if (event.target.checked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.user.firstname = this.signupForm.value.userData.firstname;
    this.user.lastname = this.signupForm.value.userData.lastname;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.userData.gender;
    this.user.hobby = this.signupForm.value.userData.hobby;
    this.user.conditions = this.signupForm.value.userData.conditions;
    this.signupForm.reset();
    console.log(this.signupForm.value.userData);
  }
}
