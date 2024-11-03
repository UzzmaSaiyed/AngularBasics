import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StarPipe } from '../../star.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, StarPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name = "Jenna"
  age = 28
}
