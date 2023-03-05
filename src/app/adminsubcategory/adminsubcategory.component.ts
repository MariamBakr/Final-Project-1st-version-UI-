import { Component } from '@angular/core';
import { SubcategoryService } from '../Services/subcategory.service';
import { SubCategories } from '../shared/models/subcategory';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-adminsubcategory',
  templateUrl: './adminsubcategory.component.html',
  styleUrls: ['./adminsubcategory.component.css']
})
export class AdminsubcategoryComponent {
  file:string=""
name:string=""
categoryname:string=""
  subcategories:any
  
  private _id: any;
  constructor(private service:SubcategoryService){
  //   let subcategoriesObservable: Observable<SubCategories>

  //   subcategoriesObservable= this.service.()

  //   subcategoriesObservable.subscribe((serverSubCategories)=>{
  //    this.subcategories = serverSubCategories.data;
  //     console.log(this.subcategories)
  //  })
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
   let catname=this.categoryname
   console.log(name)
    let formdata=new FormData()
     formdata.append('image',image)
     formdata.append('name',name)
     let subcategoriesObservable: Observable<SubCategories>
     subcategoriesObservable=this.service.addSubCategory(formdata,catname)
     subcategoriesObservable.subscribe((serverSubCategories)=>{
       this.subcategories = serverSubCategories;
     })
  }


}
