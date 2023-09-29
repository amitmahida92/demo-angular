import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {

  isDialogOpen = false;

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  ngOnInit() {

    if (window.innerWidth < 991) {
      const mySwiper = new Swiper('.petListSwiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
      });
    } else {
      const mySwiper = new Swiper('.petListSwiper', {});
      mySwiper.destroy();
    }

    window.addEventListener('resize', function (event) {
      if (window.innerWidth < 991) {
        const mySwiper = new Swiper('.petListSwiper', {
          slidesPerView: "auto",
          spaceBetween: 20,
        });
      } else {
        const mySwiper = new Swiper('.petListSwiper', {});
        mySwiper.destroy();
      }

    }, true);
  }

  isNextButtonActive: boolean = false;

  activateNextButton() {
    this.isNextButtonActive = true;

}

}
