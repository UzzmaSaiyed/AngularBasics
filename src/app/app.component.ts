import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Demo Application';
  name = 'Uzzma';
  imageurl = 'https://i.pinimg.com/736x/2b/d4/69/2bd469e044e93137be711cfa36943364.jpg';
  alternateImageUrl = 'https://cdn.shopify.com/s/files/1/2652/9998/files/what_does_single_red_rose_mean.jpg?v=1703849723';
  isAlternateImage = false;

  printButton() {
    const imageElement = document.getElementById('image') as HTMLImageElement;
    if (imageElement) {
      if (this.isAlternateImage) {
        imageElement.src = this.imageurl;
      } else {
        imageElement.src = this.alternateImageUrl;
      }
      this.isAlternateImage = !this.isAlternateImage;
    }
  }

  isAvailable = true;
  isNotAvailable = false;
  Category = 'Stationary';
}