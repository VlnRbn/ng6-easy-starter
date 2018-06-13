import { Component, OnInit } from '@angular/core';
import { TableConfig } from '../../models/table-config';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {

  config: TableConfig;

  constructor() {
    this.config = {
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

  }


  ngOnInit() {

    // setTimeout(
    //   () => {
    //     this.config = {
    //       headers: [
    //         {
    //           columnIdentifier: 'weight',
    //           columnName: 'weight Of Candidate',
    //         },
    //         {
    //           columnIdentifier: 'color',
    //           columnName: 'color Of Candidate'
    //         },
    //       ],
    //       data: [
    //         {
    //           weight: '60',
    //           color: 'Blue',
    //         },
    //         {
    //           weight: '59',
    //           color: 'Orange',
    //         }
    //       ]
    //     };
    //   }, 10000
    // )

  }

  actionDispatched(ev){
    console.log(ev)
  }
}
