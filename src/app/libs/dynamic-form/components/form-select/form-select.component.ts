import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
//   styleUrls: ['form-select.component.scss'],
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <mat-form-field appearance="standard">
      <mat-label>{{ config.label }}</mat-label>
      <mat-select [formControlName]="config.name" [placeholder]="config.placeholder" [value]="config.value">
        <mat-option [value]="option" *ngFor="let option of config.options">
          {{ option }}
        </mat-option>
      </mat-select>
      </mat-form-field>
    </div>
  `,
})
export class FormSelectComponent {
  config;
  group: FormGroup;
}