import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-array',
  templateUrl: './demo-form-array.component.html',
  styleUrls: ['./demo-form-array.component.css']
})
export class DemoFormArrayComponent implements OnInit {

  user: FormGroup;
  
  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.user = new FormGroup({
      'name': new FormControl("", Validators.required),
      'contact' : new FormControl("", Validators.required),
      'addresses': new FormArray([this.createField()], Validators.required),
    })
  }

  createField(): FormGroup {
    return new FormGroup(
      {
        house: new FormControl( null , Validators.required),
        street: new FormControl('', Validators.required),
        landmark: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required)
      })
  }

  deleteAddress(fieldIndex : number){
    console.log('delete fieldIndex', fieldIndex);
    (<FormArray>this.user.get('addresses')).removeAt(fieldIndex)
  }

  addAnotherAddres() {
    (<FormArray>this.user.get('addresses')).push(this.createField());
  }

  isErrorVisible(field: string, error: string) {
    return this.user.controls[field].dirty && this.user.controls[field].errors && this.user.controls[field].errors[error]
  }

  isErrorVisibleForAddress(index: number, control: string, error: string) {
    const i : string = index + ''
    const formArrayGroup :FormGroup = (<FormArray>this.user.get('addresses')).controls[i];
    return formArrayGroup.get(control).dirty && formArrayGroup.get(control).errors && formArrayGroup.get(control).errors[error]
  }

  isFormValid(){
    console.log(this.user.valid)
    return this.user.valid
  }

  formSubmit() {
    console.log('invoked')
    console.log(this.user.value);
  }

}
