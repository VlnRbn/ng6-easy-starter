import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormConfig } from '../../models/form-config';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  config :FormConfig[] = [
    {
      type: 'input',
      label: 'First name',
      name: 'first',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)],
      value: 'John',
      disabled : false
    },
    {
      type: 'input',
      label: 'Last name',
      name: 'last',
      placeholder: 'Enter your last name',
      validation: [Validators.required, Validators.minLength(4)],
      value: '',
      disabled : false
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required],
      value: 'Hot Dogs',
      disabled : false
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];

  formSubmitted(value) {
    console.log(value);
  }

}
