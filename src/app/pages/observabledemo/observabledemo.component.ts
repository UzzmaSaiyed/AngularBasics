import { AppService } from './../../app.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../productt';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-observabledemo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="obs">
      <h1>This is Observable example</h1>
      <ul>
        <li *ngFor="let prod of products">
          {{prod.name}} - {{prod.price}} - {{prod.quantity}}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {
  public products: Product[] = [];

  constructor(private service: AppService) { }

  // ngOnInit() {
  //   this.service.getProduct().subscribe(
  //     data => {
  //       this.products = data;
  //       console.log('Products loaded:', this.products); // Debugging log
  //     },
  //     error => {
  //       console.error('Error loading products:', error); // Debugging log
  //     }
  //   );
  // }

  ngOnInit() {
    this.service.getProduct().subscribe(data => this.products = data)
  }
}