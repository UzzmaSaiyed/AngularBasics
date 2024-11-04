import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-example',
  standalone: true,
  imports: [CommonModule],
  template:
    // template 
    ` <div>
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

  places: string[] = ["LA", "NY", "NZ"]

}
