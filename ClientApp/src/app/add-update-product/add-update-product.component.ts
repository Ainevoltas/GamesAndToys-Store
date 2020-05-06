import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.css']
})
export class AddUpdateProductComponent implements OnInit {
  @Output() productCreated = new EventEmitter<any>();
  @Input() productInfo: any;

  constructor() {
    this.clearProductInfo();
   }

  ngOnInit() {
  } 

  private clearProductInfo = function() {
    // Create an empty product object
    this.productInfo = {
      id: undefined,
      name: '',
      ageRestriction: '',
      company: '',
      price: ''
    };
  };

  public addOrUpdateProductRecord = function(event) {
    this.productCreated.emit(this.productInfo);
    this.clearProductInfo();
  };  
}


