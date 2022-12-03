import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list: Product[]
  message: String
  msg:string
  constructor() { }

  ngOnInit(): void {
    this.message = "hello my child";
    this.list = [
      {
        title: "test",
        price: 12,
        quantity: 123,
        description:"test",
        picture: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        nbrLike: 0,
        id: 1,
        category: "men"
      },
      {
        category: "women",
        title: "test",
        price: 12,
        quantity: 123,
        description:"test",
        picture: "https://i5.walmartimages.com/asr/edf2db46-a6ff-457a-9812-d088ff378299.aee4b82257fc6adecff892a23f356c86.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        nbrLike: 1,
        id: 2
      },
      {
        title: "test321",
        price: 1245,
        quantity: 0,
        description:"test",
        picture: "https://i5.walmartimages.com/asr/edf2db46-a6ff-457a-9812-d088ff378299.aee4b82257fc6adecff892a23f356c86.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        nbrLike: 0,
        id: 3,
        category: "women"
      },
      {
        title: "test123",
        price: 12,
        quantity: 123,
        description:"test",
        picture: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        nbrLike: 0,
        id: 4,
        category: "men"
      }
    ]
  }

  showMsg(data:string){
    this.msg = data;
  }

  likeAdder(p:Product){
    p.nbrLike++
  }

}
