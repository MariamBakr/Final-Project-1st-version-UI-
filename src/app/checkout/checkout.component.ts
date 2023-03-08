import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit,AfterContentChecked, AfterViewChecked } from '@angular/core';
import { VendorProductsService } from '../Services/vendor-products.service';

import { Order } from '../shared/models/order';
import { Router } from '@angular/router';
import { CHECKService } from '../Services/check.service';
import { render } from 'creditcardpayments/creditCardPayments';
import { Action } from 'rxjs/internal/scheduler/Action';

declare let paypal:any ;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewChecked {
  addscript: Boolean = false;
  finalAmount: number =0;


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
    });

    // New paypal
//     render({
//       id:'#mypaypalButton',
//       currency: 'USD',
//       // value: `${this.prod.Total_price}`,
//       // value: '100.00',
//       value: `this.finalAmount`,
//       onApprove:(details)=>{
//         alert("transaction successfull")
//       }
// });
        
  }


  //start New New paypal
 
  paypalConfig = {
    evn: 'sandbox',
    client: {
      sandbox: 'EDgbGQXh_zlKfs9HarvTgkwxLtPwLV2Lpz7HbODk483mikWisbJ0yV8GRSNxO7_Kfre9goEpnETUVFn8',
      production: 'demo_production_client_id'
    },
    commit: true,
    payment: (data: any, action: any) => {
      return action.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data: any, action: any) => {
      return action.payment.execute().then(function () {
        // Show a confirmation message to the buyer
        window.alert('Thank you for your purchase!');
      });
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addscript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal_checkout_btn')
      })
    }

  }
  

  addPaypalScript() {
    this.addscript = true;
    return new Promise<any>((resolve, reject) => {
      let scripttagElement=document.createElement('script');
      scripttagElement.src='https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

//end New New paypal



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

    console.log('ngOnInit Total_price', this.prod.Total_price)


        //  paypal
    paypal.Button.render({
      // Configure environment
      env: 'sandbox',
      client: {
        sandbox: 'sb-0gg3i25220040@business.example.com',
        production: 'demo_production_client_idAYaM7aU8l4AS202Db34oombPcN4SCUBPLdxWyWfw-G53PR4WDs7QR_yQaUH7LbT_l37BRANFiak_CGtK'
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
          transactions: [{ amount: { total: this.finalAmount, currency: 'USD' } }]
        });
      },
      // Execute the payment
      onAuthorize: function (data: any, actions: any) {
        return actions.payment.execute().then(function () {
          // Show a confirmation message to the buyer
          window.alert('Thank you for your purchase!');
        });
      }
    }, '#paypal-button');

   
  }






  showPaypal: boolean = false;
  onSubmit() {

    console.log(this.checkOutForm.value)
    this._CHECKService.CHECK_PAYMENT(this.checkOutForm.value).subscribe((data) => {
      this.showPaypal = true
      console.log(data)
      console.log('showPaypal', this.showPaypal)
    })

  }






}


