import { Component, OnInit } from '@angular/core';
import { DataItemDto, DatalistService } from '@savvy/datalist';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isEmailRegistered: boolean = false;

  pets: any[] = [];
  petname: string = '';
  selectedBreed: string = '';

  petBreeds: DataItemDto[] = [];
  contextId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private datalistService: DatalistService

  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['id']) {
        this.contextId = params['id'];
        this.loadBreeds();
      }
    });
  }

  loadBreeds() {
    if (this.contextId) {
      this.datalistService.getDataListByName(this.contextId, 'ENV_ID', 'Breed').subscribe(res => {
        if (res?.dataItems?.length) {
          this.petBreeds = res?.dataItems;
        }
      });
    }
  }

  addPet() {
    console.log(this.petname);
  }

  addNewPet() {
    const newPet = { name: 'New Pet', breed: 'Breed' };
    // this.http.post('/api/pets', newPet).subscribe((data: any) => {
    //   this.pets.push(data);
    // });
  }
}
