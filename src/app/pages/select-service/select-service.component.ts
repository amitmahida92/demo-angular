import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  isPreviousButtonActive: boolean = false;

  activatePreviousButton() {
    this.isPreviousButtonActive = true;

  }

}

