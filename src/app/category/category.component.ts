import { Component, Input } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input() cname: string = ""

}
