import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

abstract class employee {

}

type Keys = "firstname" | "surname"

type DudeType = {
  [key in Keys]: string
}
const test: DudeType = {
  firstname: "Pawel",
  surname: "Grzybek"
}

@Component({
  selector: 'app-oop1',
  templateUrl: './oop1.component.html',
  styleUrls: ['./oop1.component.css']
})
export class Oop1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
