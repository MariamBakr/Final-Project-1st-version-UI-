import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VendorProductsService } from '../Services/vendor-products.service';
import { Products } from '../shared/models/products';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit  {
  constructor(private activatedRoute: ActivatedRoute, private service: VendorProductsService){}
  prdId:string='';
  prdoduct:Products|undefined
  
  ngOnInit(): void {
    this.prdId = String (this.activatedRoute.snapshot.paramMap.get("id"))
    let prd:Observable<Products>
    prd = this.service.getProductById(this.prdId)
    prd.subscribe((prod)=>{
      this.prdoduct = prod
      console.log(this.prdoduct)
    })   
  }
}
