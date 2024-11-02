import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() pname: string = ""
  @Input() imgURL: string = ""
  data = "Stationary Item for Sale"


  onChange() {
    this.data = "Stationary Item is sold ❌"
  }

  // Lifecycle

  constructor() {
    console.log("Constructor is called...")
  }

  ngOnChanges(changes: SimpleChanges): void {
    //when passing a prop and whenever that prop is changed by parent then this function is called
    console.log("OnChanges called", changes)
  }

  ngOnInit(): void {
    console.log("OnInit is called...")
  }

  ngAfterViewInit(): void {
    //whenever UI is rendered
    console.log("AfterViewInit is called...")
  }

  ngAfterContentChecked(): void {
    //whenever UI is re rendered
    console.log("AfterContentChecked is called...")
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    console.log("OnDestroy is called")

  }

}
