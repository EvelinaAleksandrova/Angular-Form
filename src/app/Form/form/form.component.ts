import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import hobby from 'src/assets/json/hobbies.json';
import gender from 'src/assets/json/genders.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  hobbies: { code: Number, label: string }[] = hobby;
  genders: { code: Number, label: string }[] = gender;

  constructor() {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    // console.log(this.signupForm.value);
    // this.signupForm.reset();
    window.location.reload();
  }
}
