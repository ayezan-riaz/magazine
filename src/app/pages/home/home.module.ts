import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({ 
  declarations: [
    HomeComponent,
    WebHeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
