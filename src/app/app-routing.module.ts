import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { DemoCarouselComponent } from './components/demo-carousel/demo-carousel.component';
import { DemoFormArrayComponent } from './components/demo-form-array/demo-form-array.component';;

const routes: Routes = [
  {
    path: '',
    redirectTo : 'carousel',
    pathMatch : 'full'
  },
  {
    path: 'tables',
    component : DemoTableComponent
  },
  {
    path: 'forms',
    component : DemoFormComponent
  }, 
  {
    path: 'carousel',
    component : DemoCarouselComponent
  },
  {
    path: 'agm',
    loadChildren : './modules/agm-demo/agm-demo.module#AgmDemoModule'
  },
  {
    path: 'form-array',
    component : DemoFormArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
