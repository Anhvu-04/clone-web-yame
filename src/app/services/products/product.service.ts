import { Injectable } from '@angular/core';
import {ProductModel} from '../../models/productmodels';
import {buildEsbuildBrowser} from '@angular-devkit/build-angular/src/builders/browser-esbuild';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  cartList: ProductModel[] = []
  productList: ProductModel[] = [
    {
      icon: "bookmark_heart",
      imgBefore:"https://cdn2.yame.vn/pimg/quan-tay-wrinkle-free-19-0022490/bfd67074-c807-8400-a979-001c88e893e4.jpg?w=540&h=756&c=true&v=052025",
      imgAfter: "https://cdn2.yame.vn/pimg/quan-tay-wrinkle-free-19-0022490/67081c2c-0a4d-8600-a47f-001c88e89b4b.jpg?w=540&h=756&c=true",
      name: "Quần Tây Nam Co giãn Non-Iron 19",
      price: 347.000,
      priceDiscount: 277.600,
      quantity: 0
    },
    {
      icon: "bookmark_heart",
      imgBefore:"https://cdn2.yame.vn/pimg/ao-thun-co-tron-seventy-seven-03-0022719/be7e3949-f573-4700-6148-001c884bc0a1.jpg?w=540&h=756&c=true",
      imgAfter: "https://cdn2.yame.vn/pimg/ao-thun-co-tron-seventy-seven-03-0022719/bb892a2e-9872-4800-5d8b-001c884bc5a7.jpg?w=540&h=756&c=true",
      name: "Áo Thun Tay Ngắn Cotton Seventy Seven 04",
      price: 157.000,
      priceDiscount: 88.000,
      quantity: 0
    },
    {
      icon: "bookmark_heart",
      imgBefore:"https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-vai-ca-sau-4-chieu-tham-hut-bieu-tuong-dang-rong-on-gian-seventy-seven-13-0023220/96ec84cf-63b7-d000-b8cb-001c884fc6e9.jpg?w=540&h=756&c=true",
      imgAfter: "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-vai-ca-sau-4-chieu-tham-hut-bieu-tuong-dang-rong-on-gian-seventy-seven-13-0023220/610e4659-e170-ee00-2a50-001c69b5eae0.jpg?w=540&h=756&c=true",
      name: "Áo Thun Tay Ngắn Phối Sọc Vải Pique Thoáng Mát Seventy Seven 13",
      price: 157.000,
      priceDiscount: 88.000,
      quantity: 0
    },
    {
      icon: "bookmark_heart",
      imgBefore:"https://cdn2.yame.vn/pimg/quan-short-one-piece-33-0022674/e1ffa161-a95a-2900-1472-001ad5973a37.jpg?w=540&h=756&c=true",
      imgAfter: "https://cdn2.yame.vn/pimg/quan-short-one-piece-33-0022674/dc7b60b8-7276-6f00-f48b-001c6b350564.jpg?w=540&h=756&c=true",
      name: "Quần Short Thun 7 Inch ONE PIECE 33",
      price: 347.000,
      priceDiscount: 173.500,
      quantity: 0
    },
    {
      icon: "bookmark_heart",
      imgBefore:"https://cdn2.yame.vn/pimg/quan-jean-lung-gai-ong-ung-vai-cotton-mac-ben-bieu-tuong-dang-vua-gia-tot-seventy-seven-28-0023387/c9c40623-6221-ff00-2487-001c88eb9f2d.jpg?w=540&h=756&c=true",
      imgAfter: "https://cdn2.yame.vn/pimg/quan-jean-lung-gai-ong-ung-vai-cotton-mac-ben-bieu-tuong-dang-vua-gia-tot-seventy-seven-28-0023387/c9c40623-6221-ff00-2487-001c88eb9f2d.jpg?w=540&h=756&c=true",
      name: "Quần Jeans Slimfit Co Giãn Seventy Seven 28",
      price: 327.000,
      priceDiscount: 261.600,
      quantity: 0
    },
    {
      icon: "bookmark_heart",
      imgBefore:"https://cdn2.yame.vn/pimg/ao-so-mi-co-be-tay-ngan-soi-modal-tham-hut-tron-dang-vua-gia-tot-non-branded-33-0024142/973d825f-37f0-2500-2a72-001c8ab4fc84.jpg?w=540&h=756&c=true",
      imgAfter: "https://cdn2.yame.vn/pimg/ao-so-mi-co-be-tay-ngan-soi-modal-tham-hut-tron-dang-vua-gia-tot-non-branded-33-0024142/6044ec2f-3a9e-2600-6ab2-001c8ab50c86.jpg?w=540&h=756&c=true",
      name: "Áo Sơ Mi Vải Modal Mềm Mịn Ít Nhăn Non Branded 33",
      price: 197.000,
      priceDiscount: 157.600,
      quantity: 0
    },
    {
      icon: "bookmark_heart",
      imgBefore:"https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-vai-cotton-2-chieu-mac-mat-phoi-mau-dang-vua-4fan-doraemon-04-0023761/fbf88f8a-052d-6300-19d5-001c61c93f2e.jpg?w=540&h=756&c=true",
      imgAfter: "https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-vai-cotton-2-chieu-mac-mat-phoi-mau-dang-vua-4fan-doraemon-04-0023761/20b606f0-2474-5b00-a511-001bbf2c3027.jpg?w=540&h=756&c=true",
      name: "Áo Thun Tay Ngắn Vải Cool Touch Mềm Mát Doraemon 04",
      price: 327.000,
      priceDiscount: 163.500,
      quantity: 0
    },
    {
      icon: "bookmark_heart",
      imgBefore:"https://cdn2.yame.vn/pimg/tui-eo-daily-y-nguyen-ban-m1-0022279/4e9f2c38-b853-7200-8ab1-001c88fb149d.jpg?w=540&h=756&c=true",
      imgAfter: "https://cdn2.yame.vn/pimg/tui-eo-daily-y-nguyen-ban-m1-0022279/ccba2314-fd62-7300-bfee-001c88fb14ac.jpg?w=540&h=756&c=true",
      name: "Túi Đeo Messenger #Y2010 34",
      price: 197.000,
      priceDiscount: 88.000,
      quantity: 0
    },
  ]
  getDetailProduct(name: string) {
    let product = this.productList.find(item => item.name === name);
    if (product) {
      return product;
    } else {
      return {} as ProductModel;
    }
  }

  addProductToCart (name: string){
    let product = this.productList.find(item => item.name === name);
    if (product){
      let productInCart= this.cartList.find(itemCart => product.name === itemCart.name);
      if(productInCart){
        product.quantity += 1;
      }else {
        product.quantity += 1;
        this.cartList.push(product);
      }
    }
  }
  getTotalPrice(): number {
    return this.cartList.reduce((sum, item) => sum + (item.priceDiscount * (item.quantity || 1)), 0);
  }
}


