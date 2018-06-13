import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-button',
//   styleUrls: ['form-button.component.scss'],
  template: `
    <div 
      class="dynamic-field form-button"
      [formGroup]="group">
      <button mat-raised-button color="primary" type="submit" (click)="clicked()">
        {{ config.label }}
      </button>
    </div>
  `,
})
export class FormButtonComponent {
  config;
  group: FormGroup;

  clicked(){
      console.log("cl",this.config, this.group)
  }
}