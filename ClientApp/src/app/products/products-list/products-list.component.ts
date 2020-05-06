import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() productData: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  public deleteRecord(record) {
    if(confirm("Are you sure you want to delete this product? "+record.name)) {
      this.recordDeleted.emit(record);
    }    
  }
    
  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);

  }

  public newRecord() {
    this.newClicked.emit();
  }

}
