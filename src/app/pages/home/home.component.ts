import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pets: any[] = [];
  petname: string = '';
  selectedBreed: string = '';

  petBreeds: { id: string, name: string }[] = [
    { id: '1', name: 'One' },
    { id: '2', name: 'Two' },
    { id: '3', name: 'Three' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/pets').subscribe((data: any) => {
      this.pets = data;
    });
  }

  addPet() {
    console.log(this.petname);
  }

  addNewPet() {
    const newPet = { name: 'New Pet', breed: 'Breed' };
    this.http.post('/api/pets', newPet).subscribe((data: any) => {
      this.pets.push(data);
    });
  }
}
