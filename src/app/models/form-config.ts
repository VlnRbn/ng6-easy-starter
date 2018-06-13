import { ValidatorFn } from '@angular/forms'
export interface FormConfig {
    type: 'select' | 'input' | 'button';
    label: string;
    name: string;
    options?: string[];
    placeholder?: string,
    validation?: ValidatorFn[];
    value?: string;
    disabled? : boolean;
}