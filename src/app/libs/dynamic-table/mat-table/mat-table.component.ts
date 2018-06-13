import { Component, OnInit, ViewChild , AfterViewInit, Input, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActionsColumn, TableConfig, TableHeaders } from '../../../models/table-config';


@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit, AfterViewInit {

  //inform mat-table which columns to display
  displayColumn : string[]

  //details of columns to display
  columnsToDisplay : TableHeaders[]

  //data to be displayed
  reqData : any[];

  //actions column
  actionsAvailable = false;
  actions: ActionsColumn[];

  //actions dispatch
  @Output()
  dispatchAction = new EventEmitter<any>()


  //dummy config data component will accept
  config : TableConfig = {
    headers : [ 
      { 
        columnIdentifier : 'id',
        columnName : 'Age Of Candidate',
      },
      { 
        columnIdentifier : 'name',
        columnName : 'Name Of Candidate'
      },  
    ],
    data : [
      {
        id : 'pws01',
        name : 'Velen',
      },
      {
        id : 'pws02',
        name : 'Bharath',
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

  //data source reuired by mat-table
  dataSource = new MatTableDataSource<any>()

  constructor() { }

  //pagination and sorting
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource.data = this.reqData
  }

  @Input('config') set prepareTableData(config){
    this.dataSource.disconnect()
    this.reqData = config.data;
    this.columnsToDisplay = config.headers;
    this.displayColumn = config.headers.map( element => { return element.columnIdentifier });
    this.dataSource.data = this.reqData;
    this.actions = config.actions;
    if(this.actions.length > 0){
      this.displayColumn.push('actions')
      this.actionsAvailable = true;
    } 
    this.dataSource.connect()
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  triggerAction(type, element){
    this.dispatchAction.emit({type , element});
  }
}
