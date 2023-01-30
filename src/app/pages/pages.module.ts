import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppMaterial } from '../angular.material.module';
import { PostdsComponent } from './postds/postds.component';
import { AppRoutingModule } from '../app.routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PostdsComponent
  ],
  imports: [
    CommonModule,
    AppMaterial,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    PostdsComponent
  ]
})
export class PagesModule { }
