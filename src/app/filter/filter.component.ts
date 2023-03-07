import { Component, EventEmitter, inject, Output,OnInit } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { FilterService } from '../Services/filter.service';
import { Observable } from 'rxjs';
import { Products } from '../shared/models/products';
import { CategoryService } from '../Services/category.service';
import { Categories } from '../shared/models/category';
import { Colors } from '../shared/models/colors';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  enteredSearchValue:string=""
  @Output()
  minValue:number=0
  maxValue: number = 83000;
  options: Options = {
  floor: 0,
  ceil: 83000,
  translate: (value: number, label: LabelType): string => {
    switch (label) {
      case LabelType.Low:
        return "<b>Min:</b> EGP" + value;
      case LabelType.High:
        return "<b>Max:</b> EGP" + value;
      default:
        return "EGP" + value;
    }
  }
};
  searchTextChanged:EventEmitter<string>= new EventEmitter<string>()
  products:Products[]=[]
  categories:any
  selectedIndex:any
  subcategories:any
 filterservice= inject(FilterService )
  id: any;
  colorsarr:Colors[]=[]

  ngOnInit(): void {
    let productsObservable: Observable<Products[]>
    productsObservable=this.filterservice.allProduct()
    productsObservable.subscribe((serverProducts)=>{
      this.products = serverProducts;
    console.log(this.products)})

    let colorsObservable: Observable<Colors[]>

    colorsObservable=this.filterservice.allColors()
    colorsObservable.subscribe((serverColors)=>{
      this.colorsarr = serverColors;
    console.log(this.colorsarr)
  })}
    constructor(private service:CategoryService){
      let productsObservable: Observable<Products[]>
  productsObservable=this.filterservice.lowestProduct()
  productsObservable.subscribe((serverProducts)=>{
    //this.minValue= serverProducts;
    this.options.floor=(serverProducts[0].price)
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
minprice(event:any){
  console.log(event.value)

}
maxprice(event:any){
  console.log(event.value)

}

      onselectchange(event:any,index:any){
        this.selectedIndex = event.target.checked ? index : undefined;

        let productsObservable: Observable<Products[]>

        productsObservable=this.filterservice.searchProductbycat(event.target.value)
        productsObservable.subscribe((serverProducts)=>{
          this.products=serverProducts
        console.log(this.products)
      })}

      colorChange(color:any){
        color.replace('#','')
        const des=(color.replace('#',''))
        let productsObservable: Observable<Products[]>

        productsObservable=this.filterservice.searchProductbycolor(des)
        productsObservable.subscribe((serverProducts)=>{
          this.products=serverProducts
        console.log(this.products)
      })
      }
}








