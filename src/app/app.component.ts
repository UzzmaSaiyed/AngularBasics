import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './category/category.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //create variables and functions here
  title = 'Angular Demo Application'
  name = 'Uzzma'
  imageurl = 'https://i.pinimg.com/736x/2b/d4/69/2bd469e044e93137be711cfa36943364.jpg'

  printButton() {
    console.log('Button Clicked');
  }

  isAvailable = true
  isNotAvailable = false


  Category = 'Stationary'

}

