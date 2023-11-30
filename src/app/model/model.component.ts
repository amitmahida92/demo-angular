import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  modalService: any;
  // private modalService = inject(NgbModal);
  activeModal = inject(NgbActiveModal);

  open() {
    const modalRef = this.modalService.open(ModelComponent);
    modalRef.componentInstance.name = 'addpetmodal';
  }
}
