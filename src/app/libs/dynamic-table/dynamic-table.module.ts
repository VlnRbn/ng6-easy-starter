import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableComponent } from './cdk-table/cdk-table.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [
    CdkTableComponent,
    MatTableComponent
  ],
  declarations: [CdkTableComponent, MatTableComponent]
})
export class DynamicTableModule { }
