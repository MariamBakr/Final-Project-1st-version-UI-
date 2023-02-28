import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  city: any = ['Cairo','Alexandria','Giza','Shubra el-Khema',
  'Port Said','Suez','El Mahalla el Kubra','El Mansoura',
  'Tanta','Asyut','Fayoum','Zagazig','Ismailia','Khusus','Aswan',
  'Damanhur','El-Minya','Damietta','Luxor','Qena','Beni Suef',
  'Sohag','Shibin el-Kom','Hurghada','Banha','Kafr al-Sheikh',
  'Mallawi','El Arish','Belbeis','10th of Ramadan City','Marsa Matruh',
  'Mit Ghamr','Kafr el-Dawwar','Qalyub','Desouk','Abu Kabir','Girga',
  'Akhmim','El-Matareya','Edko','Bilqas','Zifta','El-sheikh Zayed'];

  checkOutForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.checkOutForm = new FormGroup({
      'firstName' : new FormControl('Marwa', Validators.required),
      'lastName' : new FormControl('Abd El-Moneim', Validators.required),
      'address' :new FormGroup({
        'streetAddress' :new FormControl('11th district, El-Sheikh Zayed', Validators.required),
        'apartmentAddress' : new FormControl(null),
        'town' : new FormControl('Giza', Validators.required),
      }),
      'postcode' : new FormControl('11500', Validators.required),
      'phone' : new FormControl('0111223344', Validators.required),
      'email' : new FormControl('marwa@gmail.com', [Validators.required, Validators.email]),
      'addInfo' : new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.checkOutForm)
  }

}
