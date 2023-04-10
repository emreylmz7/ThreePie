import { Component, OnInit } from '@angular/core';
import { Advert } from './advert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = "İlanlar"
  filterText = ""
  adverts: Advert[] = [
    {id:1,name:"Emre Yılmaz",rating:4.1,categoryId:1,description:"Antalya/Kumluca",date:"15 haziran-20 temmuz",imageUrl:"https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2016/9/23/0/CI_Airbnb_Utah.jpg.rend.hgtvcom.616.411.suffix/1491593507925.jpeg"},
    {id:1,name:"İlkay Kaysanak",rating:4.8,categoryId:2,description:"Ankara/Etimesgut",date:"4 nisan-12 mayıs",imageUrl:"https://stylecaster.com/wp-content/uploads/2020/10/barbie-dream-house-malibu-airbnb.jpg"},
    {id:1,name:"Batuhan Demir",rating:4.5,categoryId:3,description:"Antalya/Manavgat",date:"20 ocak haziran-14 şubat",imageUrl:"https://cdn.houseplansservices.com/content/oklm6skashaqg17gerc1otpqj3/w991x660.jpg?v=10"},
    {id:1,name:"Yusuf Akdemir",rating:3.5,categoryId:4,description:"Muğla/Fethiye",date:"8 ocak mart-14 nisan",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjvc74nicLK0CNuK1WVustSMT4myh4_zKNg&usqp=CAU"}
  ]


  ngOnInit(): void {
  }

}
