import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-customer-create-custom-order',
  templateUrl: './customer-create-custom-order.component.html',
  styleUrls: ['./customer-create-custom-order.component.css']
})
export class CustomerCreateCustomOrderComponent {
  
  categoryName:any=[]
  category:string=''
  subcategoryName:any=[]
  subcategory:string=''
  subcategoryFlag:boolean=false
  images:string=''
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
    description:''
  };

  @ViewChild('form')
  customOrderForm!: NgForm;

constructor(public sanitizer: DomSanitizer){}

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

next(){
  console.log("clicked");
  $('.nav-tabs > .active').next('li').find('button').trigger('click');
}
prev(){
  console.log("Back")
  $('.nav-tabs > .active').prev('li').find('button').trigger('click');
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
}

}

