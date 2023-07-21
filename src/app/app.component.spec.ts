import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'museum-website';

  images: string[] = [
    "../assets/images/Colonel Nicholls-Saint George Grenada (16x9)-min.jpg",
    "../assets/images/CombatNavalDeLaGrenade-DumoulinCompressed.JPG"
  ];

  currentSlide: number = 0;

  changeSlide(direction: number): void {
    this.currentSlide += direction;
    if (this.currentSlide < 0) {
      this.currentSlide = this.images.length - 1;
    } else if (this.currentSlide >= this.images.length) {
      this.currentSlide = 0;
    }
  }
}
