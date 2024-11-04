import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-template-example',
  standalone: true,
  imports: [CommonModule],
  template:
    // template 
    ` <div class="temp">
      <h1>Welcome to Angular Template Example</h1>
      <p>This is a simple Angular component using template syntax.</p>
      <ul>
      <li *ngFor="let place of places">{{place}}</li>
      </ul>
    </div>` // directive
  ,
  // templateUrl: './template-example.component.html',
  styleUrl: './template-example.component.css'
})
export class TemplateExampleComponent {

  // places: string[] = ["LA", "NY", "NZ"]

  places;
  // loosely coupled service by creating dependency and then we need to register this dependency in the module.ts file
  // Dependency injection

  constructor(service: PlacesService) {
    this.places = service.getPlaces();

  }

  // constructor() {
  //   // Tightly coupled service with this component
  //   let service = new PlacesService();
  //   this.places = service.getPlaces();
  // }
}