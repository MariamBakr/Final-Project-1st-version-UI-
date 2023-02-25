import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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
      'dimensions': new FormControl(null,Validators.required),
      'materials': new FormControl(null,Validators.required),
      'quantity': new FormControl(null,Validators.required),
      'color': new FormControl(null,Validators.required),
      'startPrice': new FormControl(null,Validators.required),
      'endPrice': new FormControl(null,Validators.required),
      'description': new FormControl(null,Validators.required),
      'date':new FormControl(null,Validators.required),
      'images':new FormArray([]),
    })
  }
  addImage(){
    const control = new FormControl(null);
    (<FormArray>this.customOrderForm.get('images')).push(control);
  }
////////////////////////////////////////////////
  categoryName:any=[]
  category:string=''
  subcategoryName:any=[]
  subcategory:string=''
  subcategoryFlag:boolean=false
  // images:string=''
  submitted:boolean=false;
//categories and subcategories list:
  categories = [
    {id:"1", name:'Kitchen', img:"../../assets/chair1.jpg",subCategories:[
      {id:'1',category:'Kitchen',img:"../../assets/chair1.jpg", name:'Cabinet'},
      {id:'2',category:'Kitchen',img:"../../assets/chair1.jpg", name:'Kitchen 2'},
      {id:'3',category:'Kitchen',img:"../../assets/chair1.jpg", name:'Kitchen 3'},
      {id:'4',category:'Kitchen',img:"../../assets/chair1.jpg", name:'Kitchen 4'}
    ]},
    {id:"2", name:'Living Room', img:"../../assets/chair1.jpg",subCategories:[
      {id:'1',category:'Living Room',img:"../../assets/chair1.jpg", name:'Chair'},
      {id:'2',category:'Living Room',img:"../../assets/chair1.jpg", name:'Sofa'},
      {id:'3',category:'Living Room',img:"../../assets/chair1.jpg", name:'Side Table'},
      {id:'4',category:'Living Room',img:"../../assets/chair1.jpg", name:'Rugs'}
    ]},
    {id:"3", name:'Bedroom', img:"../../assets/chair1.jpg",subCategories:[
      {id:'1',category:'Bedroom',img:"../../assets/chair1.jpg", name:'Bed'},
      {id:'2',category:'Bedroom',img:"../../assets/chair1.jpg", name:'Wardrobe'},
      {id:'3',category:'Bedroom',img:"../../assets/chair1.jpg", name:'Long Mirror'},
      {id:'3',category:'Bedroom',img:"../../assets/chair1.jpg", name:'Side Table'},
      {id:'4',category:'Bedroom',img:"../../assets/chair1.jpg", icon:'fa-solid fa-bed',name:'Drawer'}
    ]},
    {id:"4", name:'Dinning Room', img:"../../assets/chair1.jpg",subCategories:[
      {id:'1',category:'Dinning Room',img:"../../assets/chair1.jpg", name:'Chair'},
      {id:'2',category:'Dinning Room',img:"../../assets/chair1.jpg", name:'Table'},
      {id:'3',category:'Dinning Room',img:"../../assets/chair1.jpg", name:'Buffet'},
      {id:'4',category:'Dinning Room',img:"../../assets/chair1.jpg", name:'Bench'}
    ]},
    {id:"5", name:'Office', img:"../../assets/chair1.jpg",subCategories:[
      {id:'1',category:'Office',img:"../../assets/chair1.jpg", name:'Chair'},
      {id:'2',category:'Office',img:"../../assets/chair1.jpg", name:'Office 2'},
      {id:'3',category:'Office',img:"../../assets/chair1.jpg", name:'Office 3'},
    ]},
  ];

//form data object:
  customOrder={
    dimensions:'',
    materials:'',
    quantity:0,
    color:'',
    startPrice:0,
    endPrice:0,
    date:'',
    description:'',
    images:[]
  };

  // @ViewChild('form')
  // customOrderForm!: NgForm;

// constructor(public sanitizer: DomSanitizer){}

//displaying subcategories
showSubCategory(id:string){
  this.categoryName=this.categories.filter(catID=>catID.id==id)
  //checking if the subcategory array is null, push the selected subcategories in
  if(JSON.stringify(this.subcategoryName)==JSON.stringify([])){
    for(let i=0;i<this.categoryName[0].subCategories.length;i++){
      this.subcategoryName.push(this.categoryName[0].subCategories[i])
    }
  //if the subcategory array is not null, make it empty then push the selected subcategories in
  }else{
    this.subcategoryName=[];
    for(let i=0;i<this.categoryName[0].subCategories.length;i++){
      this.subcategoryName.push(this.categoryName[0].subCategories[i])
    }
  }
  //assigning the category name
  this.category=this.categoryName[0].name;
  
  this.subcategoryFlag=true;
}

//getting subcategory id
getSubCategoryId(name:string){
  //assigning the subcategory name
  this.subcategory=name;
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
  this.step3.nativeElement.classList.add('active'); 
  this.nav3.nativeElement.classList.add('active');
  this.tab3.nativeElement.classList.add('active','show');
 
  this.step2.nativeElement.classList.remove('active');
  this.nav2.nativeElement.classList.remove('active');
  this.tab2.nativeElement.classList.remove('active','show');
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
  this.submitted=true;
  this.customOrder.dimensions=this.customOrderForm.value.dimensions;
  this.customOrder.materials=this.customOrderForm.value.materials;
  this.customOrder.quantity=this.customOrderForm.value.quantity;
  this.customOrder.color=this.customOrderForm.value.color;
  this.customOrder.startPrice=this.customOrderForm.value.startPrice;
  this.customOrder.endPrice=this.customOrderForm.value.endPrice;
  this.customOrder.date=this.customOrderForm.value.date;
  this.customOrder.description=this.customOrderForm.value.description;
  this.customOrder.images=this.customOrderForm.value.images;

  console.log(this.customOrderForm)
  // this.customOrderForm.reset();
}

}

