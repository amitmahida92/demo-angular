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

const addPetModal = document.getElementById('addpetmodal') as HTMLElement;
const petNameInput = document.getElementById('petname') as HTMLInputElement;
const breedSelect = document.getElementById('breedSelect') as HTMLSelectElement;
const submitButton = document.querySelector('.modal-footer button') as HTMLButtonElement;

const openModalButton = document.getElementById('openModalButton') as HTMLButtonElement; // You should add this button in your HTML code
openModalButton.addEventListener('click', () => {
  addPetModal.classList.add('show');
});

const closeModalButton = addPetModal.querySelector('.btn-close') as HTMLElement;
closeModalButton.addEventListener('click', () => {
  addPetModal.classList.remove('show');
});


submitButton.addEventListener('click', () => {
  const petName = petNameInput.value;
  const selectedBreed = breedSelect.value;

  addPetModal.classList.remove('show');
});
