import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateExampleComponent } from './template-example.component';
import { PlacesService } from './places.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplateExampleComponent
  ],
  providers: [PlacesService]
})
export class TempModuleModule { }
