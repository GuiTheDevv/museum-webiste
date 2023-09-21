import { Component, ElementRef, OnInit } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SlideInterface } from '../SlideInterface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  currentIndex = 0;

  title = 'My Angular App';

  constructor(
    private firestore: Firestore,
    private snackBar: MatSnackBar,
    private elementRef: ElementRef
  ) {}

  //------------------------------CAROUSEL FOR OUR MISSION SECTION-------------------------------------//
  slideOurMission: SlideInterface[] = [
    {
      src: "../assets/images/Colonel Nicholls-Saint George Grenada (16x9)-min.jpg",
    },
    {
      src: "../assets/images/MuseumSideView.jpg",
    },
    {
      src: "../assets/images/CombatNavalDeLaGrenade-DumoulinCompressed.JPG",
    },
  ];

  getOurMissionSlide() {
    return `${this.slideOurMission[this.currentIndex].src}`;
  }  

  goToPreviousOurMission() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slideOurMission.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
  
  goToNextOurMission() {
    const isLastSlide = this.currentIndex === this.slideOurMission.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }  
  //---------------------------------------------------------------------------------------------------------//


  //------------------------------CAROUSEL FOR OUR NEW DIRECTION SECTION-------------------------------------//
  slideOurNewDirection: SlideInterface[] = [
    {
      src: "../assets/images/MuseumSideView.jpg",
    },
    {
      src: "../assets/images/MuseumSideView.jpg",
    },
    {
      src: "../assets/images/CombatNavalDeLaGrenade-DumoulinCompressed.JPG",
    },
  ];

  getOurNewDirectionSlide() {
    return `${this.slideOurNewDirection[this.currentIndex].src}`;
  }  

  goToPreviousOurNewDirection() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slideOurNewDirection.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
  
  goToNextOurNewDirection() {
    const isLastSlide = this.currentIndex === this.slideOurNewDirection.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  //-------------------------------------------------------------------------------------------------------//


  //-------------------------------------CAROUSEL ABOUT US SECTION-----------------------------------------//
  slideAboutUs: SlideInterface[] = [
    {
      src: "../assets/images/aNorthEastViewOfTheVillaHouse.jpg",
    },
    {
      src: "../assets/images/MuseumSideView.jpg",
    },
    {
      src: "../assets/images/CombatNavalDeLaGrenade-DumoulinCompressed.JPG",
    },
  ];

  getAboutUsSlide() {
    return `${this.slideAboutUs[this.currentIndex].src}`;
  }  

  goToPreviousAboutUs() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slideAboutUs.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
  
  goToNextAboutUs() {
    const isLastSlide = this.currentIndex === this.slideAboutUs.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  //----------------------------------------------------------------------------------------------------//


  //---------------------------------------CAROUSEL HISTORY SECTION-------------------------------------//
  slideHistory: SlideInterface[] = [
    {
      src: "../assets/images/BelmontEstate1824.jpg",
    },
    {
      src: "../assets/images/MuseumSideView.jpg",
    },
    {
      src: "../assets/images/CombatNavalDeLaGrenade-DumoulinCompressed.JPG",
    },
  ];

  getHistorySlide() {
    return `${this.slideHistory[this.currentIndex].src}`;
  }  

  goToPreviousHistory() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slideHistory.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
  
  goToNextHistory() {
    const isLastSlide = this.currentIndex === this.slideHistory.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  //-------------------------------------------------------------------------------------------------//


  
  scrollToSection(sectionId: string): void {
    const section = this.elementRef.nativeElement.querySelector('#' + sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  addEmails(email: string) {
    const ref = doc(this.firestore, 'emails', email);
    const emailData = { email: email };
    return setDoc(ref, emailData)
      .then(() => {
        this.snackBar.open('Thank You! Email added successfully', '', {
          duration: 3000, 
        });
      })
      .catch((error) => {
        console.error('Error adding email:', error);
      });
  }
}
