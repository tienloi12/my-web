import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  items = [
    {
      id : 1,
      title : "Áo bomber",
      image : "https://tse2.mm.bing.net/th?id=OIP.gIl98xTGypFBb6b8tmfJZAHaHa&pid=Api&P=0",
      description : "Áo khoác Bomber Nam Nữ - Chất liệu Kaki",
      status : "Còn hàng",
      price : "512000"
    },
    {
      id : 2,
      title : "Áo hoodie",
      image : "https://sakurafashion.vn/upload/sanpham/large/3558-ao-khoac-hoodie-hinh-ca-3.jpg",
      description : "Áo khoác Hoodie Nam Nữ - Chất liệu nỉ bông",
      status : "Còn hàng",
      price : "475000"
    },
    {
      id : 3,
      title : "Áo khoác dù",
      image : "https://karan.vn/products/thumb/ao-khoac-du-nam-2-mat-co-non-lininga.jpg",
      description : "Áo khoác dù Nam Nữ - Couple TX Basic dây kéo kim loại",
      status : "Còn hàng",
      price : "215000"
    },
    {
      id : 4,
      title : "Áo cardigan",
      image : "https://i.pinimg.com/originals/86/4b/5b/864b5bc50a71adfe696728bf7a669d58.jpg",
      description : "Áo cardigan Nữ - form rộng ",
      status : "Còn hàng",
      price : "199000"
    },
    {
      id : 5,
      title : "Áo khoác nỉ",
      image : "https://tse3.mm.bing.net/th?id=OIP.S3OyUywoQ-xRSdy98UucmAHaHa&pid=Api&P=0",
      description : "Áo khoác nỉ Nữ - form rộng",
      status : "Hết hàng",
      price : "179000"
    },
    {
      id : 6,
      title : "Áo khoác Kaki",
      image : "https://s24.com.vn/seller/uploads/products/images/5131653468100.jpg",
      description : "Áo khoác Kaki Nam Nữ - Form dáng chuẩn chống nắng, chống gió ",
      status : "Hết hàng",
      price : "125000"
    }
    
  ]
}
