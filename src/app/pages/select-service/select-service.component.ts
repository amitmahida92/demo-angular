import { Component, OnInit, inject } from '@angular/core';
import Swiper from 'swiper';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from 'src/app/model/model.component';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {
  private modalService = inject(NgbModal);
  // activeModal = inject(NgbActiveModal);

  constructor() { }

  open() {
    const modalRef = this.modalService.open(ModelComponent);
    modalRef.componentInstance.name = 'ModelComponent';
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

