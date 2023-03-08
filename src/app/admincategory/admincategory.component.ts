import { Categories } from 'src/app/shared/models/category';
import { SubCategories } from 'src/app/shared/models/subcategory';
import { SubcategoryService } from '../Services/subcategory.service';;
import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../Services/category.service';
@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent  {
  subcategoryFlag:boolean=false
  categoryformFlag:boolean=false
  subcatformFlag:boolean=false
  submitted:boolean=false;
file:string=""
name:string=""
categoryname:string=""
catid:string=''
  categories:any
  subcategories:any
 subcategoryservice=inject(SubcategoryService )
  id: any;
  constructor(private service:CategoryService){

    let categoriesObservable: Observable<Categories>

    categoriesObservable= this.service.getCategory()

    categoriesObservable.subscribe((serverProducts)=>{
     this.categories = serverProducts.data;
      console.log(this.categories)
   })
   }
   showform(){
    this.categoryformFlag=true;
   }
   showsubcatform(id:string){
    this.subcatformFlag=true;
    this.catid=id
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
     let categoriesObservable: Observable<Categories>
     categoriesObservable=this.service.addCategory(formdata)
     categoriesObservable.subscribe((serverCategories)=>{
       this.categories = serverCategories;
     })
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
  modifyCategory(id:string){
    let image=this.file
    let name=this.name
    console.log(id)
     let formdata=new FormData()
      formdata.append('image',image)
      formdata.append('name',name)
    let categoriesObservable: Observable<Categories>
    categoriesObservable=this.service.editCategory(formdata,id)
    categoriesObservable.subscribe((serverCategories)=>{
      this.categories = serverCategories;
    })
  }
  deleteCat(id:string){
    let categoriesObservable: Observable<Categories>
    categoriesObservable=this.service.deleteCategory(id)
    categoriesObservable.subscribe((serverCategories)=>{
      this.categories = serverCategories;
    })
  }
  add(){
    let image=this.file
    let name=this.name
    console.log(this.catid)
     let formdata=new FormData()
      formdata.append('image',image)
      formdata.append('name',name)
      let subcategoriesObservable: Observable<SubCategories>
      subcategoriesObservable=this.subcategoryservice.createSubCategory(formdata,this.catid)
      subcategoriesObservable.subscribe((serverSubCategories)=>{
        this.subcategories = serverSubCategories;
      })
   }
   getSubCat(id:string){
    let subcategoriesObservable: Observable<SubCategories>
    subcategoriesObservable=this.subcategoryservice.getonesubCategory(id)
    subcategoriesObservable.subscribe((serverSubCategories)=>{
      this.subcategories = serverSubCategories;
    })
   }
   editSubCat(id:string){
    let image=this.file
    let name=this.name
    console.log(id)
     let formdata=new FormData()
      formdata.append('image',image)
      formdata.append('name',name)
    let subcategoriesObservable: Observable<SubCategories>
    subcategoriesObservable=this.subcategoryservice.editSubCategory(formdata,id)
    subcategoriesObservable.subscribe((serverSubCategories)=>{
      this.subcategories = serverSubCategories;
    })
   }

   deleteSubCat(id:string){
    let subcategoriesObservable: Observable<SubCategories>
    subcategoriesObservable=this.subcategoryservice.deleteSubCategory(id)
    subcategoriesObservable.subscribe((serverSubCategories)=>{
      this.subcategories = serverSubCategories;
    })
   }
}
