import { Component } from '@angular/core';

@Component({
  selector: 'app-customerpage-for-jobdetails-and-vendorsproposals',
  templateUrl: './customerpage-for-jobdetails-and-vendorsproposals.component.html',
  styleUrls: ['./customerpage-for-jobdetails-and-vendorsproposals.component.css']
})
export class CustomerpageForJobdetailsAndVendorsproposalsComponent {
value:any;
test:string='aly'
  arr:object[]=[
    {
      describtion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quasi atque natus architecto reprehenderit earum nulla quas. Aut, enim magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quasi atque natus architecto reprehenderit earum nulla quas. Aut, enim magnam Lorem',
      deadline:'2/3/2023',
      price:50,
    },
    {
      describtion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quasi atque natus architecto reprehenderit earum nulla quas. Aut, enim magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quasi atque natus architecto reprehenderit earum nulla quas. Aut, enim magnam Lorem',
      deadline:'6/6/2026',
      price:70,
    }]

sort(){
  console.log(this.value)
}
}
