import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommencer';
  @Output() previuImage = new EventEmitter<any>();

  @ViewChild('item')item: any;

  images = [
    {"id" : 1, "image" : "./assets/img/img1.png"},
    {"id" : 2, "image" : "./assets/img/img2.png"},
    {"id" : 3, "image" : "./assets/img/img3.png"}
  ]


  previus(){
    
  }
}

