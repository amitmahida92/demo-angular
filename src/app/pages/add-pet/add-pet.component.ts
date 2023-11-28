import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from 'src/app/model/model.component';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ModelComponent);
    modalRef.componentInstance.name = 'addpetmodal';
  }
}
