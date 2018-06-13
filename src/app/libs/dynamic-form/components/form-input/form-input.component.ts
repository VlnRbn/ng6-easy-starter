import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
//   styleUrls: ['form-input.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <mat-form-field appearance="standard">
      <mat-label>{{ config.label }}</mat-label>
      <input
        matInput
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name" />
      </mat-form-field>
    </div>
  `,
})
export class FormInputComponent {
  config;
  group: FormGroup;
}