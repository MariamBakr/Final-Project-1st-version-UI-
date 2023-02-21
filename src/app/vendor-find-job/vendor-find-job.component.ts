import { Component, OnInit, OnChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vendor-find-job',
  templateUrl: './vendor-find-job.component.html',
  styleUrls: ['./vendor-find-job.component.css']
})

export class VendorFindJobComponent implements OnInit{
  
  jobCard:any=[]
  categoryName:any=[]
  subcategoryName:any=[]
  jobCategoryName:any=[]
  test:any=[]
  //owl-carousel
  customOptions: OwlOptions = {
    // stagePadding:-3.7,
    loop: true,
    mouseDrag: true,
    touchDrag:true,
    dots:false,
    navSpeed: 700, 
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      840: {
        items: 4
      },
      940: {
        items: 5
      },
    },
  }
  
  categories = [
        {id:"0",icon:'fa-solid fa-home', text:'All'},
        {id:"1",icon:'fa-solid fa-kitchen-set', text:'Kitchen',subCategories:[
          {id:'1',category:'Kitchen',icon:'fa-solid fa-sink',text:'Cabinet'},
          {id:'2',category:'Kitchen',icon:'fa-solid fa-kitchen-set',text:'Kitchen 2'},
          {id:'3',category:'Kitchen',icon:'fa-solid fa-kitchen-set',text:'Kitchen 3'},
          {id:'4',category:'Kitchen',icon:'fa-solid fa-kitchen-set',text:'Kitchen 4'}
        ]},
        {id:"2",icon:'fa-solid fa-couch', text:'Living Room',subCategories:[
          {id:'1',category:'Living Room',icon:'fa-solid fa-chair',text:'Chair'},
          {id:'2',category:'Living Room',icon:'fa-solid fa-couch',text:'Sofa'},
          {id:'3',category:'Living Room',icon:'fa-solid fa-table-columns',text:'Side Table'},
          {id:'4',category:'Living Room',icon:'fa-solid fa-rug',text:'Rugs'}
        ]},
        {id:"3",icon:'fa-solid fa-bed', text:'Bedroom',subCategories:[
          {id:'1',category:'Bedroom',icon:'fa-solid fa-bed',text:'Bed'},
          {id:'2',category:'Bedroom',icon:'fa-solid fa-bed',text:'Wardrobe'},
          {id:'3',category:'Bedroom',icon:'fa-solid fa-bed',text:'Long Mirror'},
          {id:'3',category:'Bedroom',icon:'fa-solid fa-table-columns',text:'Side Table'},
          {id:'4',category:'Bedroom',icon:'fa-solid fa-bed',text:'Drawer'}
        ]},
        {id:"4",icon:'fa-solid fa-utensils', text:'Dinning Room',subCategories:[
          {id:'1',category:'Dinning Room',icon:'fa-solid fa-utensils',text:'Chair'},
          {id:'2',category:'Dinning Room',icon:'fa-brands fa-cc-diners-club',text:'Table'},
          {id:'3',category:'Dinning Room',icon:'fa-brands fa-buffer',text:'Buffet'},
          {id:'4',category:'Dinning Room',icon:'fa-solid fa-utensils',text:'Bench'}
        ]},
        {id:"5",icon:'fa-solid fa-print', text:'Office',subCategories:[
          {id:'1',category:'Office',icon:'fa-solid fa-briefcase',text:'Chair'},
          {id:'2',category:'Office',icon:'fa-solid fa-phone',text:'Office 2'},
          {id:'3',category:'Office',icon:'fa-solid fa-print',text:'Office 3'},
        ]},
    ];

  Jobs =[
      {
        id:'1',
        clientImg:'../../assets/person3.jpg',
        clientName:'John Doe',
        category:'Bedroom',
        subCategory:'Bed',
        jobDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod sequi veniam, vitae sint ipsum dolor sit amet consectetur adipisicitng elit. Optio quod sequi veniam, vitae sin',
        jobImage:'../../assets/FURNITURE.jpg',
        jobPrice:'$50',
        status:'available'
      },
      {
        id:'2',
        clientImg:'../../assets/person1.jpg',
        clientName:'John Doe',
        category:'Living Room',
        subCategory:'Chair',
        jobDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod sequi veniam, vitae sint',
        jobImage:'../../assets/chair2.jpg',
        jobPrice:'$50',
        status:'Unavailable'
      },
      {
        id:'3',
        clientImg:'../../assets/person3.jpg',
        clientName:'John Doe',
        category:'Bedroom',
        subCategory:'Bed',
        jobDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod sequi veniam, vitae sint',
        jobImage:'../../assets/chair2.jpg',
        jobPrice:'$50',
        status:'Unavailable'
      },
      {
        id:'4',
        clientImg:'../../assets/person1.jpg',
        clientName:'John Doe',
        category:'Living Room',
        subCategory:'Sofa',
        jobDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod sequi veniam, vitae sint',
        jobImage:'../../assets/chair2.jpg',
        jobPrice:'$50',
        status:'available'
      },
      {
        id:'5',
        clientImg:'../../assets/person1.jpg',
        clientName:'John Doe',
        category:'Kitchen',
        subCategory:'Cabinet',
        jobDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod sequi veniam, vitae sint',
        jobImage:'../../assets/chair2.jpg',
        jobPrice:'$50',
        status:'Unavailable'
      },
      {
        id:'6',
        clientImg:'../../assets/person1.jpg',
        clientName:'John Doe',
        category:'Dinning Room',
        subCategory:'Table',
        jobDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod sequi veniam, vitae sint',
        jobImage:'../../assets/chair2.jpg',
        jobPrice:'$50',
        status:'available'
      },
      {
        id:'7',
        clientImg:'../../assets/person1.jpg',
        clientName:'John Doe',
        category:'Office',
        subCategory:'Chair',
        jobDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod sequi veniam, vitae sint',
        jobImage:'../../assets/chair2.jpg',
        jobPrice:'$50',
        status:'available'
      }
    ]

    ngOnInit(){
      //displaying all jobs 
      this.jobCard=this.Jobs;
      
    }

    showSubCategory(id:string){
      //displaying All categories Jobs
      if(id=="0"){
        this.subcategoryName=[];
        this.jobCard=this.Jobs
      }else{
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
      //displaying all the jobs related to specific category
      this.jobCard=this.Jobs.filter(job=>job.category==this.categoryName[0].text)
      }
    }

    // display the subcategories jobs
    showJobCards(text:string,cat:string){
      this.jobCard=this.Jobs.filter(job=>job.subCategory==text && job.category==cat);
    }
}