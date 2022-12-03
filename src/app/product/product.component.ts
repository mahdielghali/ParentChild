import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() messageParent: String;
  @Output() messageFils= new EventEmitter<string>()
  @Output() likeAdd = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  sendMessage(){
    let msg = "hello from child " + this.product.title
    this.messageFils.emit(msg)
  }

  addLike(){
    this.likeAdd.emit()
  }

}
