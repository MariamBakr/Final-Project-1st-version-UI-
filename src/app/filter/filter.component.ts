import { Component, EventEmitter, inject, Output,OnInit, ViewChild, ElementRef } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { FilterService } from '../Services/filter.service';
import { Observable } from 'rxjs';
import { Products } from '../shared/models/products';
import { CategoryService } from '../Services/category.service';
import { Categories } from '../shared/models/category';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Colors ,Vendors} from '../shared/models/colors';
import { filteration } from '../shared/models/filteration';
import { style } from '@angular/animations';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @ViewChild('mySidebar')
  mySidebar!: ElementRef;
  @ViewChild('main')
  main!: ElementRef;
  enteredSearchValue:string=""
  @Output()
  minValue:number=0

  maxValue: number = 50000;
  options: Options = {
  floor: 0,
  ceil: 50000,
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
  clicked:boolean=false
  fontsize:any
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
        nav: true
      }
    },
    nav: true
  }
  ngOnInit(): void {
    this.filterservice.allProduct().subscribe((serverProducts)=>{
      this.products = serverProducts;
      this.total=this.products.length
      // this.page=1
     console.log(this.products)
  })
  }
    constructor(private service:CategoryService, private router: Router){


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

            let categoriesObservable: Observable<Categories>

            categoriesObservable= this.service.getCategory()

            categoriesObservable.subscribe((serverProducts)=>{
             this.categories = serverProducts.data;
              console.log(this.categories)
           })

          }



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
      this.total=this.products.length

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
    this.total=this.products.length

  console.log(this.products)
})}


view_details(id:string) {
  this.router.navigate(['/single-product', id ]);
}
      onselectchange(event:any,index:any){
        this.selectedIndex = event.target.checked ? index : undefined;
        this.filteration.catid=event.target.value
        this.page=1
        //let productsObservable: Observable<Products[]>
//const name=event.target.value.toLowerCase()
        this.filterservice.searchp(this.filteration).subscribe((serverProducts: any)=>{
          this.products=serverProducts
          this.total=this.products.length

        console.log(this.products)
      })}
      onvendorchange(event:any,v:any){
        this.selectedv = event.target.checked ? v : undefined;
        this.filteration.vendid=event.target.value

        //console.log(event.target.value)
       this.filterservice.searchp(this.filteration).subscribe((serverProducts: any)=>{
          this.products=serverProducts
          this.total=this.products.length
          this.page=1
        console.log(this.products)
      })}
      // openNav() {
      //   style({width:})
      // }
      colorChange(color:any){
        color.replace('#','')
        const des=(color.replace('#',''))
        this.filteration.color=des

this.filterservice.searchp(this.filteration).subscribe((serverProducts: any)=>{
          this.products=serverProducts
          this.total=this.products.length
          this.page=1
        console.log(this.products)
      })
      }
}









