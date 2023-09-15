import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  myScriptElement: HTMLScriptElement;
   constructor(){
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "../../assets/limupa-assets/js/main.js";
      document.body.appendChild(this.myScriptElement);
   }
}
