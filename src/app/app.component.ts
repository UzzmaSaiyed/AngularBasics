import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Product } from './types';
import { CommonModule } from '@angular/common';
import { TemplateExampleComponent } from './pages/template-example/template-example.component';
import { ObservabledemoComponent } from './pages/observabledemo/observabledemo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, TemplateExampleComponent, ObservabledemoComponent, HttpClientModule],
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

  product: Product = {
    id: 4,
    name: 'Notebook',
    quantity: 10,
    price: 20
  }
  trackById(index: number, item: any): number {
    return item.id;
  }

  products: Product[] =
    [
      { id: 1, name: 'Pen', quantity: 20, price: 5 },
      { id: 2, name: 'Pencil', quantity: 0, price: 2 },
      { id: 3, name: 'Ruler', quantity: 15, price: 10 },
      { id: 4, name: 'Notebook', quantity: 10, price: 20 },
      { id: 5, name: 'Eraser', quantity: 5, price: 3 },
      { id: 1, name: 'Pen', quantity: 0, price: 5 },
      { id: 2, name: 'Pencil', quantity: 30, price: 2 },
      { id: 3, name: 'Ruler', quantity: 15, price: 10 },
      { id: 4, name: 'Notebook', quantity: 10, price: 20 },
      { id: 5, name: 'Eraser', quantity: 0, price: 3 },
      { id: 1, name: 'Pen', quantity: 20, price: 5 },
      { id: 2, name: 'Pencil', quantity: 0, price: 2 },
      { id: 3, name: 'Ruler', quantity: 15, price: 10 },
      { id: 4, name: 'Notebook', quantity: 10, price: 20 },
      { id: 5, name: 'Eraser', quantity: 5, price: 3 }

    ]

}