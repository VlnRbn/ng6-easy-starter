import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { DynamicFormComponent } from './containers/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
// import { DynamicFormComponent } from './dymamicForm.component';

@NgModule({
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        DynamicFormComponent
    ],
    declarations: [
        DynamicFormComponent,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        DynamicFieldDirective
    ],
    providers: [],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
    ]
})
export class DynamicFormModule { }
