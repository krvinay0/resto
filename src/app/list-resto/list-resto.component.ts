import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  constructor(private resto: RestoService) {}
  restolist: any = [];
  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.restolist = result;
    });
  }

  // data = [
  //   {
  //     "id": 1,
  //     "name": "KFC restaurant",
  //     "address": "noida sector 50",
  //     "email": "kfc@test.com"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Prem Sweets restaurant",
  //     "address": "gurugram sector 50",
  //     "email": "Premsweets@test.com"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Kanha restaurant",
  //     "address": "gaya sector 50",
  //     "email": "kanha@test.com"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Sinha restaurant",
  //     "address": "mumbai sector 50",
  //     "email": "sinha@test.com"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Maharani restaurant",
  //     "address": "noida sector 50",
  //     "email": "maharani@test.com"
  //   },
  //   {
  //     "name": "Kgf restaurant",
  //     "address": "noida sector 50",
  //     "email": "kfc@test.com",
  //     "id": 6
  //   },
  //   {
  //     "name": "Kgf restaurant",
  //     "address": "noida sector 50",
  //     "email": "kfc@test.com",
  //     "id": 7
  //   },
  //   {
  //     "name": "Govindas restaurant",
  //     "address": "gurugram sector 50",
  //     "email": "Premsweets@test.com",
  //     "id": 8
  //   },
  //   {
  //     "name": "Kanak restaurant",
  //     "address": "noida sector 50",
  //     "email": "kfc@test.com",
  //     "id": 9
  //   },
  //   {
  //     "name": "Gopal Daba",
  //     "address": "gurugram sector 15",
  //     "email": "Premsweets@test.com",
  //     "id": 10
  //   }
  // ]
}
