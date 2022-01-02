import { Component, OnInit } from '@angular/core';
import { Person } from '../models/HashTable';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-rand-person',
  templateUrl: './rand-person.component.html',
  styleUrls: ['./rand-person.component.css']
})
export class RandPersonComponent implements OnInit {
  persons: { [key: string]: Person } = {}


  constructor(
    private apiService: ApiService
  ) { }
  // url = https://randomuser.me/api
  url: string
  apiText: string

  ngOnInit() {
    this.persons['Mark'] = {
      name: 'Mark',
      gender: "m"
    }
    this.persons['Tom'] = {
      name: 'Tom',
      gender: "m"
    }
    this.persons['Mary'] = {
      name: 'Mary',
      gender: "f"
    }
    this.persons['Suzy'] = {
      name: 'Suzy',
      gender: "f"
    }
    this.persons['Gene'] = {
      name: 'Gene',
      gender: "m"
    }

    console.log(this.persons['Mark'])
    for (let key in this.persons) {
      console.log(this.persons[key])
    }
  }


  public submit(url: string): void {
    if (!url) return

    this.apiService.getSomeApi(url).subscribe({
      next: (resp) => {
        console.log(resp)
        this.apiText = JSON.stringify(resp, null, 2)
      },
      error: (err) => console.error(err)
    })

  }

}
