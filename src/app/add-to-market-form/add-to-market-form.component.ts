import { VendorProductsService } from './../Services/vendor-products.service';
import { Products } from './../shared/models/products';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-to-market-form',
  templateUrl: './add-to-market-form.component.html',
  styleUrls: ['./add-to-market-form.component.css']
})
export class AddToMarketFormComponent {
  

  products:Products[]=[];
  constructor(private service:VendorProductsService){}

  @ViewChild('form')
  form!: ElementRef;

  hi_iam_option(addprodectform: FormGroup) {
    console.log("hi_iam_option");
    console.log(addprodectform.value.Main_Category);
  }

  Sub_Category_Data: string[] = []

  

  
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


  submitFormadd(form:any) {
    // console.log(addprodectform.get("Title_Product")?.getError('required'));
    // console.log(addprodectform.get('Description')?.getError('minLength'))
    // console.log(addprodectform.get('Description')?.errors)
    //  console.log(addprodectform.value);

    //ADDING FORM VALUES INTO FormData
     let formData = new FormData();
     let arr=[]
     //looping on images formArray to append
     for(let i of form.imageProduct){
      console.log(i.files[0]);
      // if(i != null){
        
        formData.append('image_Product',i.files[0]);

      // }
     
     } 

    //  formData.append('image_Product',JSON.stringify(arr));
     
     //looping on colors formArray to append
     for(let i of this.addprodectform.get('Color_Product')?.value){
      if(i != null){
        formData.append('Color_Product',i)
      }
     }
     formData.append('Color_Product',this.addprodectform.get('Color_Product')?.value)
     formData.append('Title_Product',this.addprodectform.get('Title_Product')?.value)
     formData.append('Description',this.addprodectform.get('Description')?.value)
     formData.append('Price',this.addprodectform.get('Price')?.value)
     formData.append('avialble_Quntity',this.addprodectform.get('avialble_Quntity')?.value)
     formData.append('Material',this.addprodectform.get('Material')?.value)
     formData.append('DimensionsW',this.addprodectform.get('DimensionsW')?.value)
     formData.append('DimensionsH',this.addprodectform.get('DimensionsH')?.value)
     formData.append('DimensionsL',this.addprodectform.get('DimensionsL')?.value)
     formData.append('Main_Category',this.addprodectform.get('Main_Category')?.value)
     formData.append('Sub_Category',this.addprodectform.get('Sub_Category')?.value)

    //  console.log(addprodectform.get('image_Product')?.value)
    console.log(formData.get('image_Product'))
     //sending API request on form data 
     let productsObservable: Observable<Products[]>
     productsObservable=this.service.addProduct(formData)
     productsObservable.subscribe((serverProducts)=>{
       this.products = serverProducts;
     })

    //  addprodectform.reset();
  }


  addColor(){

    (<FormArray>this.addprodectform.get('Color_Product')).push(new FormControl("",[Validators.required])),

    (<FormArray>this.addprodectform.get('image_Product')).push(new FormControl("",[Validators.required]))

    this.addprodectform.get('Color_Product')?.updateValueAndValidity();
    this.addprodectform.get('image_Product')?.updateValueAndValidity();

  }

   remove_Color_image(target:any){
    // console.log(target);
    this.Colors.removeAt(target);
    this.images.removeAt(target);
  }

  checkArray():boolean{
   let isValid = false;
   this.images.controls.forEach((i)=>{
    if(i.hasError('required') && i.touched){
       isValid=true;
    }
    })
    return isValid;
  }
}
