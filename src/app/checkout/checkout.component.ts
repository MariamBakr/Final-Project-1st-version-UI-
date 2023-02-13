import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  city: any = ['Cairo','Alexandria','Giza','Shubra el-Khema',
  'Port Said','Suez','El Mahalla el Kubra','El Mansoura',
  'Tanta','Asyut','Fayoum','Zagazig','Ismailia','Khusus','Aswan',
  'Damanhur','El-Minya','Damietta','Luxor','Qena','Beni Suef',
  'Sohag','Shibin el-Kom','Hurghada','Banha','Kafr al-Sheikh',
  'Mallawi','El Arish','Belbeis','10th of Ramadan City','Marsa Matruh',
  'Mit Ghamr','Kafr el-Dawwar','Qalyub','Desouk','Abu Kabir','Girga',
  'Akhmim','El-Matareya','Edko','Bilqas','Zifta','El-sheikh Zayed'];
}
