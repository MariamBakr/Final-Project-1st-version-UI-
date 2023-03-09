import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../Services/cart.service';
import { VendorProductsService } from '../Services/vendor-products.service';
import { WishlistService } from '../Services/wishlist.service';
import { Products } from '../shared/models/products';
import { user } from '../shared/models/user';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit  {
  constructor(private activatedRoute: ActivatedRoute, private service: VendorProductsService, private cartService: CartService, private listService: WishlistService){}
  prdId:string='';
  prdoduct:Products|undefined
  catname:string=''
  subcatname:string=''
  categoryservice=inject(CategoryService )

  ngOnInit(): void {
    this.prdId = String (this.activatedRoute.snapshot.paramMap.get("id"))
    let prd:Observable<Products>
    prd = this.service.getProductById(this.prdId)
    prd.subscribe((prod)=>{
      this.prdoduct = prod
      console.log('******' + this.prdoduct.colors)
      this.categoryservice.getcategorybyid(this.prdoduct.category).subscribe((servercatname:any)=>{
        console.log(servercatname.data)
        this.catname=servercatname.data})
        console.log(this.catname)
        this.categoryservice.getsubcategorybyid(this.prdoduct.subcategory).subscribe((serversubcatname:any)=>{
          console.log(serversubcatname.data)
          this.subcatname=serversubcatname.data
          console.log(this.subcatname)
      })
      
    })


  }


  addToCart(product: object) {
    console.log('clicked')
    console.log(product)
    this.cartService.addToCart(product).subscribe((data) => {
      console.log("product in cart")
    })}

  addToWishlist(product: object) {
    this.listService.addToList(product).subscribe((data) => {
      console.log(data)
    })
  }


}
