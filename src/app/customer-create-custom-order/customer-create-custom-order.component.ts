import { Component, ViewChild, ElementRef, OnInit ,inject} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Categories } from 'src/app/shared/models/category';
import { SubCategories } from 'src/app/shared/models/subcategory';
import { SubcategoryService } from '../Services/subcategory.service';;
import { Observable } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { CustomOrdersService } from '../Services/custom-orders.service';
import { CustomOrder } from '../shared/models/customOrder';
@Component({
  selector: 'app-customer-create-custom-order',
  templateUrl: './customer-create-custom-order.component.html',
  styleUrls: ['./customer-create-custom-order.component.css']
})
export class CustomerCreateCustomOrderComponent implements OnInit{

  @ViewChild('step1')
  step1!: ElementRef;
  @ViewChild('step2')
  step2!: ElementRef;
  @ViewChild('step3')
  step3!: ElementRef;

  @ViewChild('nav1')
  nav1!: ElementRef;
  @ViewChild('nav2')
  nav2!: ElementRef;
  @ViewChild('nav3')
  nav3!: ElementRef;

  @ViewChild('tab1')
  tab1!: ElementRef;
  @ViewChild('tab2')
  tab2!: ElementRef;
  @ViewChild('tab3')
  tab3!: ElementRef;

  //form control
  customOrderForm!: FormGroup;

  ngOnInit(){
    this.customOrderForm = new FormGroup({
      title: new FormControl(null),
      Description: new FormControl(null, [Validators.required ,Validators.minLength(100),Validators.maxLength(300)]),
      startPrice: new FormControl(null, [Validators.required]),
      endPrice: new FormControl(null, [Validators.required]),

      Quantity: new FormControl(null, [Validators.required]),
      Material: new FormControl(null, [Validators.required]),
      DimensionsW: new FormControl(null, [Validators.required]),
      DimensionsH: new FormControl(null, [Validators.required]),
      DimensionsL: new FormControl(null, [Validators.required]),
      Main_Category: new FormControl(null, [Validators.required]),
      Sub_Category: new FormControl(null, [Validators.required]),
      // image_Product: new FormControl(null, [Validators.required]),
     Date: new FormControl(null, [Validators.required]),

     Color_Product: new FormControl(null, [Validators.required]),


       image_Product: new FormArray([
        new FormControl("",[Validators.required])

      ])
    })
  }

////////////////////////////////////////////////
  categoryName:any=[]
  category:string=''
  categories:any
  customOrders:any
  subcategories:any
  subcategoryservice=inject(SubcategoryService )
  customorderservice=inject(CustomOrdersService )
  subcategory:string=''
  subcategoryFlag:boolean=false
  images:any
  submitted:boolean=false;
//categories and subcategories list:

constructor(private service:CategoryService){

  let categoriesObservable: Observable<Categories>

  categoriesObservable= this.service.getCategory()

  categoriesObservable.subscribe((serverProducts)=>{
   this.categories = serverProducts.data;
    console.log(this.categories)
 })
 }
//form data object:
  customOrder={
    dimensionsw:'',
    dimensionsl:'',
    dimensionsh:'',
title:'',
category:'',
subcategory:'',
    materials:'',
    quantity:0,
    color:'',
    startPrice:0,
    endPrice:0,
    date:'',
    description:'',
    images:''
  };

  // @ViewChild('form')
  // customOrderForm!: NgForm;

// constructor(public sanitizer: DomSanitizer){}

//displaying subcategories
showSubCategory(id:string){
  this.category=id
  console.log(id)
  let subcategoriesObservable: Observable<SubCategories>
  subcategoriesObservable= this.service.getSubCategoryOfCategory(id)
  subcategoriesObservable.subscribe((serverProducts)=>{
  this.subcategories = serverProducts.data;
})



this.subcategoryFlag=true;
}

//getting subcategory id
getSubCategoryId(id:string){
  //assigning the subcategory name
  this.subcategory=id;
  // console.log(this.subcategory)
}
onFilechange(event: any) {
  console.log(event.target.files)
  this.images = event.target.files

}
//navigation for the second Tab
next2(){

  this.step2.nativeElement.classList.add('active');
  this.nav2.nativeElement.classList.add('active');
  this.tab2.nativeElement.classList.add('active','show');

  this.step1.nativeElement.classList.remove('active');
  this.nav1.nativeElement.classList.remove('active');
  this.tab1.nativeElement.classList.remove('active','show');

  // console.log("clicked");
  // $('.nav-tabs > .active').next('li').find('button').trigger('click');
}
prev2(){
  this.step1.nativeElement.classList.add('active');
  this.nav1.nativeElement.classList.add('active');
  this.tab1.nativeElement.classList.add('active','show');

  this.step2.nativeElement.classList.remove('active');
  this.nav2.nativeElement.classList.remove('active');
  this.tab2.nativeElement.classList.remove('active','show');
}
//navigation for the third Tab
next3(){
this.submitted=true

this.customOrder.title=this.customOrderForm.value.title;

this.customOrder.dimensionsl=this.customOrderForm.value.DimensionsL;
this.customOrder.dimensionsh=this.customOrderForm.value.DimensionsH;
this.customOrder.dimensionsw=this.customOrderForm.value.DimensionsW;
this.customOrder.materials=this.customOrderForm.value.Material;
this.customOrder.quantity=this.customOrderForm.value.Quantity;
this.customOrder.color=this.customOrderForm.value.Color_Product;
this.customOrder.startPrice=this.customOrderForm.value.startPrice;
this.customOrder.endPrice=this.customOrderForm.value.endPrice;
this.customOrder.date=this.customOrderForm.value.Date;
this.customOrder.description=this.customOrderForm.value.Description;
this.customOrder.images=this.images
  this.step3.nativeElement.classList.add('active');
  this.nav3.nativeElement.classList.add('active');
  this.tab3.nativeElement.classList.add('active','show');

  this.step2.nativeElement.classList.remove('active');
  this.nav2.nativeElement.classList.remove('active');
  this.tab2.nativeElement.classList.remove('active','show');

  console.log(this.customOrderForm.value.Color_Product)
}
prev3(){
  this.step2.nativeElement.classList.add('active');
  this.nav2.nativeElement.classList.add('active');
  this.tab2.nativeElement.classList.add('active','show');

  this.step3.nativeElement.classList.remove('active');
  this.nav3.nativeElement.classList.remove('active');
  this.tab3.nativeElement.classList.remove('active','show');
}

onSubmit(){


  this.customOrder.title=this.customOrderForm.value.title;

  this.customOrder.dimensionsl=this.customOrderForm.value.DimensionsL;
  this.customOrder.dimensionsh=this.customOrderForm.value.DimensionsH;
  this.customOrder.dimensionsw=this.customOrderForm.value.DimensionsW;
  this.customOrder.materials=this.customOrderForm.value.Material;
  this.customOrder.quantity=this.customOrderForm.value.Quantity;
  this.customOrder.color=this.customOrderForm.value.Color_Product;
  this.customOrder.startPrice=this.customOrderForm.value.startPrice;
  this.customOrder.endPrice=this.customOrderForm.value.endPrice;
  this.customOrder.date=this.customOrderForm.value.Date;
  this.customOrder.description=this.customOrderForm.value.Description;
  this.customOrder.images=this.images

  const c=this.customOrderForm.value.Color_Product.replace('#','')
  // this.customOrderForm.reset();

  let formdata=new FormData()

 for(let i=0;i<this.images.length;i++){
  formdata.append('image_Product',this.images[i])

 }

   formdata.append('description',this.customOrder.description)
   formdata.append('duedate',this.customOrderForm.value.Date)
   formdata.append('min',this.customOrderForm.value.endPrice)
   formdata.append('max',this.customOrderForm.value.startPrice)
   formdata.append('Color_Product',c)
   formdata.append('quantity',this.customOrderForm.value.Quantity)
   formdata.append('DimensionsL',this.customOrderForm.value.DimensionsL)
   formdata.append('DimensionsW',this.customOrderForm.value.DimensionsW)
   formdata.append('DimensionsH ',this.customOrderForm.value.DimensionsH)
   formdata.append('material',this.customOrderForm.value.Material)
   formdata.append('name',this.customOrderForm.value.title)
   formdata.append('categoryid',this.category)
   formdata.append('subcategoryid',this.subcategory)


console.log(formdata)

  let customOrdersObservable: Observable<CustomOrder>
  customOrdersObservable=this.customorderservice.addCustomOrder(formdata)
  customOrdersObservable.subscribe((serverCustomOrders)=>{
    this.customOrders = serverCustomOrders;
  })
}

}

