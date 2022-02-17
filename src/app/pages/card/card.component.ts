import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  user =[
    { 
      title:"Person to Person",
      desc:"Whether you need to send your father’s reading glasses or surprise your mom with a handwoven shawl, we’ll make sure everything moves with flexibility, speed, and accuracy.",
      img:('assets/p2p.jpg'),
      url:'p2p'
      
      
    },
    {
      title:"Merchant Delivery Service",
      desc:"We understand the hustle you go through while building your business, we empathise with the nervousness of your very first-order. We are here as your partner with the flexibility to deliver things wherever and whenever you require.",
      img:('assets/merchant.jpg'),
      url:'merchant'
    },
    {
      title:"Airparcel",
      desc:"When things can’t wait to be sent the next day or the coming week, and you desperately want to send or receive something that very day, we are here for you as we understand the anticipation and urgency.",
      img:('assets/air.jpg'),
      url:'air'
    },
    {
      title:"Corporate and Sme Delivery",
      desc:"From providing a hassle-free end-to-end delivery to making sure we accelerate your company’s efficiency, we help your business a great deal with each delivery. Our delivery solutions can be customised for big and small corporations.",
      img:('assets/sme.jpg'),
      url:'sme'
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
