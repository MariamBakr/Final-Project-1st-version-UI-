import { Categories } from 'src/app/shared/models/category';
import { SubCategories } from 'src/app/shared/models/subcategory';

import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CategoryService } from '../Services/category.service';
@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent  {
  subcategoryFlag:boolean=false
  // images:string=''
  submitted:boolean=false;
file:string=""
name:string=""
  categories:any
  subcategories:any
  constructor(private service:CategoryService){
    let categoriesObservable: Observable<Categories>

    categoriesObservable= this.service.getCategory()

    categoriesObservable.subscribe((serverProducts)=>{
     this.categories = serverProducts.data;
      console.log(this.categories)
   })
   }


  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  onInputChange(event:any){

    this.name=event.target.value
    console.log(this.name)
  }
  upload(){
   let image=this.file
   let name=this.name
   console.log(name)
    let formdata=new FormData()
     formdata.append('image',image)
     formdata.append('name',name)
    //  let categoriesObservable: Observable<Categories[]>
    //  categoriesObservable=this.service.addCategory(formdata)
    //  categoriesObservable.subscribe((serverCategories)=>{
    //    this.categories = serverCategories;
    //  })
  }
  showSubCategory(id:string){
    console.log(id)
    let subcategoriesObservable: Observable<SubCategories>

    subcategoriesObservable= this.service.getSubCategoryOfCategory(id)

    subcategoriesObservable.subscribe((serverProducts)=>{
     this.subcategories = serverProducts.data;

   })

  this.subcategories.name

  this.subcategoryFlag=true;
  }

}
