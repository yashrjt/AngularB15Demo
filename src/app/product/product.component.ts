import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId:number=123;
  productArray=[
    {
      'id':123,
      'name':'laptops',
      'price':'35'
    },
    {
      'id':456,
      'name':'laptops',
      'price':'30'
    },
    {
      'id':789,
      'name':'laptops',
      'price':'40'
    }
  ]

  showProductDetail:boolean=true;

  constructor() { }


  ngOnInit() {
  }

  submit(){
    console.log('you clicked the button');
    this.showProductDetail=!this.showProductDetail;
  }

}
