import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselDirective } from './libs/carousel/carousel.directive';
import { DynamicFormModule } from './libs/dynamic-form/dynamic-form.module';

import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { DemoCarouselComponent } from './components/demo-carousel/demo-carousel.component';
import { AppMaterialModule } from './app.material';
import { DynamicTableModule } from './libs/dynamic-table/dynamic-table.module';
// import { CdkTableComponent } from './dynamic-table/cdk-table/cdk-table.component';

import { AgmCoreModule } from '@agm/core';
import { DemoFormArrayComponent } from './components/demo-form-array/demo-form-array.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    CarouselDirective,
    DemoTableComponent,
    DemoFormComponent,
    DemoCarouselComponent,
    DemoFormArrayComponent
    // CdkTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormModule,
    DynamicTableModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
