import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  // validatins are mentioned inside the form control parameter
  name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]);
  phone = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)])
  email = new FormControl('', [Validators.required, Validators.email])

  // Collection of form control
  serviceForm = new FormGroup(
    {
      name: this.name,
      phone: this.phone,
      email: this.email
    }
  )

  printData() {
    // Prevent from reloading the entire page
    event?.preventDefault();
    if (this.serviceForm.valid) {
      // console.log("Name: ", this.name)
      // console.log("Phone: ", this.phone)
      // console.log("Email: ", this.email)
      console.log("ServiceForm: ", this.serviceForm)
    }
    else {
      console.log("Form is not valid")
    }

  }
}
