import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-schedules',
  templateUrl: './select-schedules.component.html',
  styleUrls: ['./select-schedules.component.scss']
})
export class SelectSchedulesComponent implements OnInit {

  ngOnInit() {

  //   const myGroomerSwiper = new Swiper('.groomerListSwiper', {
  //     slidesPerView: "auto",
  //     spaceBetween: 10,
  //   });

  //   /* left pet selection swiper */
  //   if (window.innerWidth < 991) {
  //     const mySwiper = new Swiper('.petListSwiper', {
  //       slidesPerView: "auto",
  //       spaceBetween: 20,
  //     });
  //   } else {
  //     const mySwiper = new Swiper('.petListSwiper', {});
  //     mySwiper.destroy();
  //   }

  //   window.addEventListener('resize', function (event) {
  //     if (window.innerWidth < 991) {
  //       const mySwiper = new Swiper('.petListSwiper', {
  //         slidesPerView: "auto",
  //         spaceBetween: 20,
  //       });
  //     } else {
  //       const mySwiper = new Swiper('.petListSwiper', {});
  //       mySwiper.destroy();
  //     }

  //   }, true);

  //   /* Timeslot selection */
  //   const timeslots = document.getElementsByClassName('timeslot');

  //   document.querySelectorAll('.timeslot').forEach(function () {

  //   });

  //   document.querySelectorAll('.timeslot').forEach(item => {
  //     item.addEventListener('change', event => {

  //       document.querySelectorAll('.timeslot').forEach(items => {
  //         items.closest('.card').classList.remove('selected');
  //       });

  //       if (item.checked === true) {
  //         item.closest('.card').classList.add('selected')
  //       } else {
  //         item.closest('.card').classList.remove('selected')
  //       }
  //     })
  //   })


  //   /* date picker */
  //   $('#datepickerinline').daterangepicker({
  //     "singleDatePicker": true,
  //     "autoApply": true,
  //     "isInvalidDate": function (date) {
  //       if (date.day() == 0 || date.day() == 1 || date.day() == 2 || date.day() == 3 || date.day() == 4 || date.day() == 5)
  //         return false;
  //       return true;
  //     },
  //     "showCustomRangeLabel": false,
  //     "parentEl": '.datepickerinline',
  //     "alwaysShowCalendars": true,
  //     "buttonClasses": "btn",
  //     "applyButtonClasses": "btn-default",
  //     "cancelClass": "btn-light"
  //   }, function (start, end, label) {
  //     //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  //     document.getElementById('selecteddate').innerHTML = end.format('DD MMMM YYYY');

  //   });
  //   $('#datepickerinline').click();
  // }

}
}
