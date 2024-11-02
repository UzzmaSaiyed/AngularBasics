import { Component, Input } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input() cname: string = ""
  param = ""
  prod = "Pen"

  showProducts = true

  // to check which route is activated
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.param = this.activatedRoute.snapshot.params['id']
  }
  onChange() {
    this.prod = "Pens"
  }

  toggleProducts() {
    if (this.showProducts) {
      this.showProducts = false
    }
    else {
      this.showProducts = true
    }
  }

}
