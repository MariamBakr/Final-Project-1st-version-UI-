import { WishlistService } from './../Services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  wishlistProducts:any
  constructor(private service: WishlistService, private router: Router){}

  ngOnInit(): void {
    this.service.getAllForClient().subscribe((data)=>{
      this.wishlistProducts=data.data
    })
  }

  getAll(){
    this.service.getAllForClient().subscribe((data)=>{
      this.wishlistProducts=data.data
    })
  }

  removeProduct(prodId:string){
    this.service.removeFromList(prodId).subscribe((data)=>{
      console.log(data)
      this.getAll()
    })
  }


  view_details(id: string) {
    this.router.navigate(['/single-product', id]);
  }



}
