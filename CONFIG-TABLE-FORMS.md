# Ng6-easy-starter

## Dynamic Tables

Add DynamicTableModule in imports of @NgModule decorator and also import it from 'src/app/libs/dynamic-table/dynamic-table.module';

add the following in .html file, app-mat-table is container selector of tables
    **<app-mat-table [config]="config" (dispatchAction)="actionDispatched($event)" ></app-mat-table>

include the following config structure in component.ts file (interface TableConfig)

    this.config : TableConfig[] = {
      headers: [
        {
          columnIdentifier: 'age',
          columnName: 'Age Of Candidate',
        },
        {
          columnIdentifier: 'name',
          columnName: 'Name Of Candidate'
        },
      ],
      data: [
        {
          age: '22',
          name: 'Velen',
        },
        {
          age: '21',
          name: 'Bharath',
        },
        {
          age: '22',
          name: 'Rakesh',
        },
        {
          age: '21',
          name: 'Jorge',
        }
      ],
      actions : [
        {
          icon : 'delete',
          tooltip: 'delete',
          type: 'delete'
        },
        {
          icon : 'mode_edit',
          tooltip: 'edit',
          type: 'edit'
        }
      ]
    };

    *note that data of config must be configured such that columnIdentifier 'value' should be 'key' in config.data
    *If actions is are included the on clicking the icon will dispatch an event dispatchAction($event), $event will include the "row data" and type defined in actions.type


## Dynamic forms

Add DynamicFormModule in imports of @NgModule decorator and also import it from 
'./libs/dynamic-form/dynamic-form.module';

add the following in .html file, app-mat-table is container selector of forms
    **<dynamic-form 
    **  [config]="config" 
    **  (submit)="formSubmitted($event)"
    **  > 
    **</dynamic-form>

include the following config structure in component.ts file (interface FormConfig)

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

## Carousel

*carousel="let url from images; let ctrl = controller"
