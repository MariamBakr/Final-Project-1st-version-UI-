import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  images=[
  {src:'../assets/about 1.jfif',name:'',caption:'MODERN'},
  {src:'../assets/about 2.png',name:'',caption:'CLASSIC'},
  {src:'../assets/about 3.jfif',name:'',caption:'CUSTOM'},
  {src:'../assets/about 5.jfif',name:'',caption:'CLASSIC MODERN'}]
}
