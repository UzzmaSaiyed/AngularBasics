import { Component } from '@angular/core';

@Component({
  selector: 'app-template-example',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Welcome to Angular Template Example</h1>
      <p>This is a simple Angular component using template syntax.</p>
    </div>`,
  // templateUrl: './template-example.component.html',
  styleUrl: './template-example.component.css'
})
export class TemplateExampleComponent {

}
