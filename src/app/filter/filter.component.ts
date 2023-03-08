import { Component, EventEmitter, inject, Output,OnInit } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { FilterService } from '../Services/filter.service';
import { Observable } from 'rxjs';
import { Products } from '../shared/models/products';
import { CategoryService } from '../Services/category.service';
import { Categories } from '../shared/models/category';
import { Colors ,Vendors} from '../shared/models/colors';
import { filteration } from '../shared/models/filteration';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  enteredSearchValue:string=""
  @Output()
  minValue:number=0

  maxValue: number = 3000;
  options: Options = {
  floor: 0,
  ceil: 3000,
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
  products:any
  n:string[]=[]
  page:any=1
  total:any
  elem:string=''
  categories:any
filteration:filteration=new filteration
  selectedIndex:any
  subcategories:any
 filterservice= inject(FilterService )
  id: any;
  colorsarr:any
   newcolorsarr:any
  vendors:Vendors[]=[]
  selectedv: any;
  ngOnInit(): void {
    this.filterservice.allProduct().subscribe((serverProducts)=>{
      this.products = serverProducts;
      this.total=this.products.length
      // this.page=1
     console.log(this.products)
  })
  }
    constructor(private service:CategoryService){


        // console.log(this.products)


       // let colorsObservable: Observable<Colors[]>

        this.filterservice.allColors().subscribe({
          next:(serverColors)=>{

            this.colorsarr = serverColors;

          //   var printArray = function(arr:any) {


          for(let i = 0; i < this.colorsarr.length;i++){


            for(let j = 0; j <  this.colorsarr[i].length; j++){
              this.elem=this.colorsarr[i][j]
              this.n.push(this.elem)
            }
        }
          console.log(this.n)

          //console.log(printArray(this.colorsarr));

      //console.log(this.colorsarr)

            // for (let index = 0; index < this.colorsarr.length; index++) {
            //   //console.log(this.colorsarr[index].colors)
            //  this.newcolorsarr.push(Array.from(new Set(this.colorsarr[index].colors)))

            // }


            let productsObservable: Observable<Products[]>
        productsObservable=this.filterservice.lowestProduct()
        productsObservable.subscribe((serverProducts)=>{
          //this.minValue= serverProducts;

       })
            let categoriesObservable: Observable<Categories>

            categoriesObservable= this.service.getCategory()

            categoriesObservable.subscribe((serverProducts)=>{
             this.categories = serverProducts.data;
              console.log(this.categories)
           })

          }


          //Array.from(new Set(this.colorsarr[0].colors));
          ///console.log(Array)
        //console.log(this.colorsarr[0].colors)
      })

      let vendorsObservable: Observable<Vendors[]>

      vendorsObservable=this.filterservice.allvendors()
      vendorsObservable.subscribe((serverVendors)=>{
        this.vendors = serverVendors;
      console.log(this.vendors)
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
this.filterservice.searchProduct(data).subscribe((serverProducts: any)=>{
    this.products = serverProducts.data;
    this.page=this.products.length
  console.log(this.products)
 })
}
minprice(event:any){
  console.log(event.value)
console.log(this.minValue)
}
maxprice(event:any){
  console.log(event.value)
console.log(this.maxValue)
}
pageChanged(event:any){
this.page=event

}
press(min:number,max:number){
  let productsObservable: Observable<Products[]>
 console.log(min)
 console.log(max)
 this.minValue=min
 this.maxValue=max
 this.filteration.minValue=this.minValue
 this.filteration.maxValue=this.maxValue

  productsObservable=this.filterservice.searchp(this.filteration)
  productsObservable.subscribe((serverProducts)=>{
    this.products=serverProducts
    this.page=this.products.length
  console.log(this.products)
})}



      onselectchange(event:any,index:any){
        this.selectedIndex = event.target.checked ? index : undefined;
        this.filteration.catid=event.target.value

        //let productsObservable: Observable<Products[]>
//const name=event.target.value.toLowerCase()
        this.filterservice.searchp(this.filteration).subscribe((serverProducts: any)=>{
          this.products=serverProducts
          this.page=this.products.length
        console.log(this.products)
      })}
      onvendorchange(event:any,v:any){
        this.selectedv = event.target.checked ? v : undefined;
        this.filteration.vendid=event.target.value

        //console.log(event.target.value)
       this.filterservice.searchp(this.filteration).subscribe((serverProducts: any)=>{
          this.products=serverProducts
          this.page=this.products.length
        console.log(this.products)
      })}

      colorChange(color:any){
        color.replace('#','')
        const des=(color.replace('#',''))
        this.filteration.color=des

this.filterservice.searchp(this.filteration).subscribe((serverProducts: any)=>{
          this.products=serverProducts
          this.page=this.products.length
        console.log(this.products)
      })
      }
}








