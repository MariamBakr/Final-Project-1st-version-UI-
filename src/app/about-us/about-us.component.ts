import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  images=[
  {src:'../assets/about 1.jfif',name:'',caption:'FIRST CAPTION'},
  {src:'../assets/about 2.png',name:'',caption:'SECOND CAPTION'},
  {src:'../assets/about 3.jfif',name:'',caption:'THIRD CAPTION'},
  {src:'../assets/about 4.jfif',name:'',caption:'FOURTH CAPTION'},
  {src:'../assets/about 5.jfif',name:'',caption:'FIFTH CAPTION'}]
}
