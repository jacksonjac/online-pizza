import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
 orderForm!: FormGroup;
  pizzaBases = [
  'Neapolitan Crust',
  'New York Style Crust',
  'Sicilian Crust',
  'Thin Crust Pizzas',
  'Thick Crust',
  'Stuffed Crust',
  'Gluten-Free Crust',
  'Whole Wheat or Multigrain Crust'
];

pizzaSizes = [
  'Small 8 – 10 Inches',
  'Medium 12 – 14 Inches',
  'Large 14 – 16 Inches'
];

pizzaToppings = [
  'Pepperoni',
  'Mushrooms',
  'Onions',
  'Sausages',
  'Black Olives',
  'Bacon',
  'Pineapple'
];

constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      base: ['', Validators.required],
      size: ['', Validators.required],
      toppings: this.fb.array([], [Validators.required, Validators.minLength(3)])
    });
  }

  onToppingChange(event: any) {
    const toppings = this.orderForm.get('toppings') as FormArray;
    if (event.target.checked) {
      toppings.push(this.fb.control(event.target.value));
    } else {
      const index = toppings.controls.findIndex(x => x.value === event.target.value);
      toppings.removeAt(index);
    }
  }

submitOrder() {
  if (this.orderForm.valid) {
    console.log('Pizza Order:', this.orderForm.value);
    // Navigate to summary or send to backend here
  } else {
    alert('Please complete the form with at least 3 toppings.');
  }
}

}
