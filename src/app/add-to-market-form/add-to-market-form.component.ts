import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-to-market-form',
  templateUrl: './add-to-market-form.component.html',
  styleUrls: ['./add-to-market-form.component.css']
})
export class AddToMarketFormComponent {
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
    image_Product: new FormControl(null, [Validators.required]),
    Color_Product: new FormArray([]),
  })


  leter: string ="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. "

  submitFormadd(addprodectform: FormGroup) {
    console.log(addprodectform.get("Title_Product")?.getError('required'));
    console.log(this.leter.length);
    console.log(addprodectform.get('Description')?.getError('minLength'))
    console.log(addprodectform.get('Description')?.errors)
  }

  addColor(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.addprodectform.get('Color_Product')).push(control);
  }
}
