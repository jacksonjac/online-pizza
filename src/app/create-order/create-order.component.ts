import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
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
    'Thin Crust',
    'Thick Crust',
    'Stuffed Crust',
    'Gluten-Free Crust',
    'Whole Wheat or Multigrain Crust'
  ];

pizzaToppings = [
  {
    name: 'Pepperoni',
    image: 'https://i.pinimg.com/1200x/e0/04/d7/e004d700ad8443218a3b5545a12d9f9f.jpg'
  },
  {
    name: 'Mushrooms',
    image: 'https://i.pinimg.com/1200x/fd/29/9f/fd299f461ae988923aa178e4c4d943cf.jpg'
  },
  {
    name: 'Olives',
    image: 'https://i.pinimg.com/736x/ab/22/b2/ab22b27ab8d6f9efc765feb700c3d6a2.jpg'
  },
  {
    name: 'Onions',
    image: 'https://i.pinimg.com/1200x/7a/ec/20/7aec20a7932b6b6b332c2c1a084ed766.jpg'
  },
  {
    name: 'Pineapple',
    image: 'https://i.pinimg.com/736x/64/b2/cb/64b2cb73a19b83d72e6cd8440481e0fc.jpg'
  },
  {
    name: 'Sausage',
    image: 'https://i.pinimg.com/736x/f9/00/7f/f9007f73da46783cb255a1e621637f27.jpg'
  },
];


  constructor(private fb: FormBuilder, private route: Router,private service:OrderService) {}

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
      if (index >= 0) toppings.removeAt(index);
    }
  }

  submitOrder() {
    if (this.orderForm.valid) {
      console.log('✅ Pizza Order:', this.orderForm.value);
     
      this.service.postStubOrders(this.orderForm.value).subscribe(data =>{
        console.log("stored orders",data)
      })
      this.route.navigateByUrl('/summary');
    } else {
      console.log('Invalid Order:', this.orderForm.value);
      this.orderForm.markAllAsTouched();
      alert('Please complete the form:\n- Choose base\n- Choose size\n- Select at least 3 toppings');
    }
  }
}
