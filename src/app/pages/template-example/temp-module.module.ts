import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesService } from './places.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../app.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule

  ],
  providers: [PlacesService],
})
export class TempModuleModule { }
