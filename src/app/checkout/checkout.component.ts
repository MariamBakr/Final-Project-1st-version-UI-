import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit,AfterContentChecked } from '@angular/core';
import { VendorProductsService } from '../Services/vendor-products.service';

import { Order } from '../shared/models/order';
import { Router } from '@angular/router';
import { CHECKService } from '../Services/check.service';


declare let paypal:any ;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  city: any = ['Cairo', 'Alexandria', 'Giza', 'Shubra el-Khema',
    'Port Said', 'Suez', 'El Mahalla el Kubra', 'El Mansoura',
    'Tanta', 'Asyut', 'Fayoum', 'Zagazig', 'Ismailia', 'Khusus', 'Aswan',
    'Damanhur', 'El-Minya', 'Damietta', 'Luxor', 'Qena', 'Beni Suef',
    'Sohag', 'Shibin el-Kom', 'Hurghada', 'Banha', 'Kafr al-Sheikh',
    'Mallawi', 'El Arish', 'Belbeis', '10th of Ramadan City', 'Marsa Matruh',
    'Mit Ghamr', 'Kafr el-Dawwar', 'Qalyub', 'Desouk', 'Abu Kabir', 'Girga',
    'Akhmim', 'El-Matareya', 'Edko', 'Bilqas', 'Zifta', 'El-sheikh Zayed'];

  checkOutForm!: FormGroup;

  prod: Order=new Order();
  constructor(private _VendorProductsService: VendorProductsService, private _Router: Router, private _CHECKService: CHECKService) {
    this._VendorProductsService.checkout().subscribe((data) => {
      console.log(data);
      this.prod = data as Order;
    })

  }
  fisNam: string = localStorage.getItem("userName") ?? ""
 

  ngOnInit(): void {
    this.checkOutForm = new FormGroup({
      'firstName': new FormControl(this.fisNam, Validators.required),
      'lastName': new FormControl('', Validators.required),
      'address': new FormGroup({
        'street': new FormControl('', Validators.required),
        'apartment': new FormControl(''),
        'town': new FormControl('', Validators.required),
      }),
      'postcode': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'addInfo': new FormControl("")
    })

// ******************
    // finalAmount:number = this.prod.Total_price;
// ******************
    // paypal payment
    
    paypal.Button.render({
      // Configure environment
      env: 'sandbox',
      client: {
        sandbox: 'AYaM7aU8l4AS202Db34oombPcN4SCUBPLdxWyWfw-G53PR4WDs7QR_yQaUH7LbT_l37BRANFiak_CGtK',
        production: 'demo_production_client_id'
      },
      // Customize button (optional)
      locale: 'en_US',
      style: {
        size: 'large',
        color: 'gold',
        shape: 'pill',
      },

      // Enable Pay Now checkout flow (optional)
      commit: true,

      // Set up a payment
      payment: function (data: any, actions: any) {
        return actions.payment.create({
          transactions: [{
            amount: {
              // total: this.prod.Total_price,
              total: "10.0",
              currency: 'USD'
            }
          }]
        });
      },
      // Execute the payment
      onAuthorize: function (data:any, actions:any) {
        return actions.payment.execute().then(function () {
          // Show a confirmation message to the buyer
          window.alert('Thank you for your purchase!');
        });
      }
    }, '#paypal-button');
   

   
  }






showPaypal:boolean=false;
  onSubmit() { 
    
    console.log(this.checkOutForm.value)
    this._CHECKService.CHECK_PAYMENT(this.checkOutForm.value).subscribe((data)=>{
   
      this.showPaypal = true 
      console.log(data)
      console.log('showPaypal', this.showPaypal )
    })
   
  }


}