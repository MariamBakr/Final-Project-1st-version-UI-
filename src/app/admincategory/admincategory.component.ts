import { Categories } from 'src/app/shared/models/category';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CategoryService } from '../Services/category.service';
@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent {
  categories:Categories[]=[]
  constructor(private service:CategoryService){}
  upload(data:any){
    console.log(data)
    let file=data.file
    let name=data.name
    let formdata=new FormData()
     formdata.append('file',file)
     formdata.append('name',name)
    //  console.log(formdata.get('file'))
     let categoriesObservable: Observable<Categories[]>
     categoriesObservable=this.service.addCategory(data)
     categoriesObservable.subscribe((serverCategories)=>{
       this.categories = serverCategories;
     })
  }
}
