import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'dynamic-form',
    template: `
        <form
            class="dynamic-form"
            [formGroup]="form"
            (ngSubmit)="submited()"
            >
            <ng-container
            *ngFor="let field of config;"
            dynamicField
            [config]="field"
            [group]="form">
          </ng-container>
        </form>
    `
})

export class DynamicFormComponent implements OnInit {
    @Input()
    config: any[] = [];

    @Output()
    submit = new EventEmitter<any>()

    form : FormGroup;
    

    constructor(private fb : FormBuilder) { }

    ngOnInit() { 
        this.form = this.createGroup()
    }

    submited(){
        // console.log(this.form.value)
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.form.value)
    }

    get formValue(){
        return this.form.value
    }

    createGroup() : FormGroup {
        const group = this.fb.group({});

        this.config.forEach(control => 
            {
                console.log(control)
                group.addControl(control.name, this.createControl(control))
            })
        return group
    }

    createControl(control) {
        const { validation, value, disabled } = control;
        return this.fb.control( {value, disabled} , validation);
    }
    
}