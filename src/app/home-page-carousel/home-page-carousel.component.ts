import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-carousel',
  templateUrl: './home-page-carousel.component.html',
  styleUrls: ['./home-page-carousel.component.css']
})
export class HomePageCarouselComponent {
  images=[{src:'../assets/pexels-jean-van-der-meulen-1543447.jpg',name:'',caption:''},
  {src:'../assets/pexels-nugroho-wahyu-3097112.jpg',name:'',caption:''},
  {src:'../assets/pexels-ashraf-chemban-1778353.jpg',name:'',caption:''},
  {src:'../assets/pexels-max-vakhtbovych-6438762.jpg',name:'',caption:''},
  {src:'../assets/pexels-huseyn-kamaladdin-667838.jpg',name:'',caption:''},
  {src:'../assets/pexels-max-vakhtbovych-7018400.jpg',name:'',caption:''}]
}
