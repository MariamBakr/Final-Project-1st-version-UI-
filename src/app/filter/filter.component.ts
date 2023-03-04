import { Component, EventEmitter, inject, Output,OnInit } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { FilterService } from '../Services/filter.service';
import { Observable } from 'rxjs';
import { Products } from '../shared/models/products';
import { CategoryService } from '../Services/category.service';
import { Categories } from '../shared/models/category';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  enteredSearchValue:string=""
  //@Output()
  minValue:any
  maxValue: number = 83000;
//   options: Options = {
//   floor: this.minValue,
//   ceil: 83000,
//   translate: (value: number, label: LabelType): string => {
//     switch (label) {
//       case LabelType.Low:
//         return "<b>Min:</b> EGP" + value;
//       case LabelType.High:
//         return "<b>Max:</b> EGP" + value;
//       default:
//         return "EGP" + value;
//     }
//   }
// };
  searchTextChanged:EventEmitter<string>= new EventEmitter<string>()
  products:Products[]=[]
  categories:any
  selectedIndex:any
  subcategories:any
 filterservice= inject(FilterService )
  id: any;
  checkedcategories:string[]=[]

    constructor(private service:CategoryService){
      let productsObservable: Observable<Products[]>
  productsObservable=this.filterservice.lowestProduct()
  productsObservable.subscribe((serverProducts)=>{
    //this.minValue= serverProducts;
    this.minValue=(serverProducts[0].price)
 })
      let categoriesObservable: Observable<Categories>

      categoriesObservable= this.service.getCategory()

      categoriesObservable.subscribe((serverProducts)=>{
       this.categories = serverProducts.data;
        console.log(this.categories)
     })
     }


  // Code for Multi price range

  // End of Code Multi price range

  //all body in hide_hilight function for test to be removed
  hide_hilight(e: any) {
    e.target.style.color="red !important";
    e.target.style.value="for test to be removed";
    console.log(e.target.style.value);
  }
 onSearchTextChanged(data:any){

  this.searchTextChanged.emit(this.enteredSearchValue)
  console.log(data)
  let d=this.filterservice.searchProduct(data)
  let productsObservable: Observable<Products[]>
  productsObservable=this.filterservice.searchProduct(data)
  productsObservable.subscribe((serverProducts)=>{
    this.products = serverProducts;
  console.log(this.products)
 })
}
price(event:any){
  console.log(event.value)
}
checkCheckBoxvalue(checks: any)
{
    if (!this.checkedcategories.includes(checks)) {
      this.checkedcategories.push(checks);
    } else {
      var index = this.checkedcategories.indexOf(checks);
      if (index > -1) {
        this.checkedcategories.splice(index, 1);
      }


}}
      onselectchange(event:any,index:any){
        this.selectedIndex = event.target.checked ? index : undefined;

        let productsObservable: Observable<Products[]>

        productsObservable=this.filterservice.searchProductbycat(event.target.value)
        productsObservable.subscribe((serverProducts)=>{
          this.products=serverProducts
        console.log(this.products)
      })}}








