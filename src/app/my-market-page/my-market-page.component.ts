import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { VendorProductsService } from '../Services/vendor-products.service';
import { Products } from '../shared/models/products';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-my-market-page',
  templateUrl: './my-market-page.component.html',
  styleUrls: ['./my-market-page.component.css']
})
export class MyMarketPageComponent {
  categoryservice=inject(CategoryService )
 Sub_Category_Data: string[] = []
catname:string[]=[]
subcatname:string[]=[]
 products: Products[]=[];

 constructor(private productsService: VendorProductsService){
   let productsObservable: Observable<Products[]>

   productsObservable = this.productsService.getByVendorId()

   productsObservable.subscribe((serverProducts)=>{
     this.products = serverProducts;
     for (let index = 0; index < this.products.length; index++) {
      this.categoryservice.getcategorybyid(this.products[index].category).subscribe((servercatnames:any)=>{
        this.catname.push(servercatnames.data)})
        this.categoryservice.getsubcategorybyid(this.products[index].subcategory).subscribe((servercatnames:any)=>{
          console.log(servercatnames.data)
          this.subcatname.push(servercatnames.data)
      })
  }

   })

 }

  select_Main_Category(addprodectform: FormGroup) {
    if (addprodectform.value.Main_Category == "living_rooms") {

      this.Sub_Category_Data = ["living_rooms1", "living_rooms2", "living_rooms3", "living_rooms4"]
    }
    else if (addprodectform.value.Main_Category == "bed_rooms") {
      this.Sub_Category_Data = ["bed_rooms1", "bed_rooms2", "bed_rooms3", "bed_rooms4"]
    }
    else if (addprodectform.value.Main_Category == "dinning_rooms") {
      this.Sub_Category_Data = ["dinning rooms1", "dinning rooms2", "dinning rooms3", "dinning rooms4"]
    }
    else if (addprodectform.value.Main_Category == "kitchens") {
      this.Sub_Category_Data = ["kitchen1", "kitchen2", "kitchen3", "kitchen4"]
    }
    else if (addprodectform.value.Main_Category == "office") {
      this.Sub_Category_Data = ["office1", "office2", "office3", "office4"]
    }

  }


  addprodectform: FormGroup = new FormGroup({
    Title_Product: new FormControl(null, [Validators.required]),
    Description: new FormControl(null, [Validators.required ,Validators.minLength(100),Validators.maxLength(300)]),
    Price: new FormControl(null, [Validators.required]),
    avialble_Quntity: new FormControl(null, [Validators.required]),
    Material: new FormControl(null, [Validators.required]),
    DimensionsW: new FormControl(null, [Validators.required]),
    DimensionsH: new FormControl(null, [Validators.required]),
    DimensionsL: new FormControl(null, [Validators.required]),
    Main_Category: new FormControl(null, [Validators.required]),
    Sub_Category: new FormControl(null, [Validators.required]),
    // image_Product: new FormControl(null, [Validators.required]),

    Color_Product: new FormArray([
      new FormControl("",[Validators.required])

    ]),

     image_Product: new FormArray([
      new FormControl("",[Validators.required])

    ])
  })


  get Colors() {
    return this.addprodectform.get('Color_Product') as FormArray;
  }


 get images() {
    return this.addprodectform.get('image_Product') as FormArray;
  }


  submitFormadd(addprodectform: FormGroup) {
    console.log(addprodectform.get("Title_Product")?.getError('required'));
    console.log(addprodectform.get('Description')?.getError('minLength'))
    console.log(addprodectform.get('Description')?.errors)
     console.log(addprodectform.value);
  }


  addColor(){

    (<FormArray>this.addprodectform.get('Color_Product')).push(new FormControl(null,[Validators.required])),

    (<FormArray>this.addprodectform.get('image_Product')).push(new FormControl(null,[Validators.required]))
  }

   remove_Color_image(target:any){
    console.log(target);
    this.Colors.removeAt(target);
    this.images.removeAt(target);
  }



// image_Product
title = 'ng-carousel-demo';

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

  slides = [
    { id: 1, img: "https://htmldemo.net/expert/expert/assets/images/product/23_6.webp" },
    { id: 2, img: "https://htmldemo.net/expert/expert/assets/images/cart/12_23.webp" },
    { id: 3, img: "https://htmldemo.net/expert/expert/assets/images/product/5_2.webp" },
    { id: 4, img: "https://htmldemo.net/expert/expert/assets/images/product/22_1.webp" }

  ];


// Color_Product
titlec = 'ng-carousel-demo';

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 5
      },
      600: {
        items: 5
      },
      740: {
        items: 5
      },
      940: {
        items: 5,
        nav: true
      }
    },
    nav: true
  }

  slides12 = [
    { id: 1, color: "#f85707" },
    { id: 2, color: "#f8f807" },
    { id: 3, color: "#33f807" },
    { id: 4, color: "#07e4f8" },
 { id: 3, color: "#1505f4" },
  ];


////////// Delete /////////
   deleteproductId=""
   setdeleteproductId(productId:string){
     this.deleteproductId=productId

   }
Delete() {
  this.productsService.deletePostById(this.deleteproductId).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("Student Deletedddd")
      this.productsService.getAll().subscribe((resultData: any)=>{
        this.products=resultData
      }

  )
    })
  }






}
