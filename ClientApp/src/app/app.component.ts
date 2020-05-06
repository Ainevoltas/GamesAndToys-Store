import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public productData: Array<any>;
  public currentProduct: any;

  constructor(private httpService: HttpService){

    httpService.get().subscribe((data: any) => this.productData = data);
    this.currentProduct = this.setInitialValuesForProductData();
  }

  private setInitialValuesForProductData () {
    return {
      id: undefined,
      name: '',
      ageRestriction: '',
      company: '',
      price: ''
    }
  }

  public createOrUpdateProduct = function(product: any) {
    // if a product is present in productData, we can assume this is an update
    // otherwise it is adding a new element
    let productWithId;
    productWithId = _.find(this.productData, (el => el.id === product.id));

    if (productWithId) {
      const updateIndex = _.findIndex(this.productData, {id: productWithId.id});
      this.httpService.update(product).subscribe(
        productRecord =>  this.productData.splice(updateIndex, 1, product)
      );
    } else {
      this.httpService.add(product).subscribe(
        productRecord => this.productData.push(product)
      );
    }

    this.currentproduct = this.setInitialValuesForProductData();
  };

  public editClicked = function(record) {
    this.currentProduct = record;
  };

  public newClicked = function() {
    this.currentProduct = this.setInitialValuesForProductData(); 
  };

  public deleteClicked(record) {
    console.log(record)
    const deleteIndex = _.findIndex(this.productData, {id: record.id});
    this.httpService.remove(record).subscribe(
      result => this.productData.splice(deleteIndex, 1)
    );
  }
}
