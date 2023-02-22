import { Component } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  // Code for Multi price range
  minValue: number = 1300;
  maxValue: number = 83000;
  options: Options = {
    floor: 1300,
    ceil: 83000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min:</b> EGP" + value;
        case LabelType.High:
          return "<b>Max:</b> EGP" + value;
        default:
          return "EGP" + value;
      }
    }
  };
  // End of Code Multi price range

  //all body in hide_hilight function for test to be removed
  hide_hilight(e: any) {
    e.target.style.color="red !important";
    e.target.style.value="for test to be removed";
    console.log(e.target.style.value);
  }
}
