import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmDemoComponent } from './agm-demo.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : AgmDemoComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: environment.gmapApi
    })
  ],
  declarations: [AgmDemoComponent]
})
export class AgmDemoModule { }
