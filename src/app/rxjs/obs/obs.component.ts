import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';


type dataResp = {
  results: [
    {
      picture: {
        large: string;
        medium: string;
        thumbnail: string;
      }
    }
  ]
}

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {
  large: string = ''
  data: dataResp
  myOutput = []

  constructor(
  ) { }

  ngOnInit(): void {
    // not like this
    var observableVerbose = new Observable(function subscribe(observer) {
      observer.next('Hey')
    })


    // emission function = "observer"
    const emissionFcn = (data) => {
      data.next('anything')
      data.next('MyObserver doing a thing')
      data.next('Also hey')
      data.error('Doh!')
      data.next('No hey')
      data.complete()
    }


    // less verbose
    var observable = new Observable(emissionFcn)
    // var observable = new Observable((obs) => {


    //   obs.next('MyObserver doing a thing')
    //   obs.next('Also hey')
    //   obs.error('Doh!')
    //   obs.next('No hey')
    //   obs.complete()
    // }

    // doing it javascript style
    // function addItem(val: any) {
    //   var node = document.createElement("li");
    //   var textNode = document.createTextNode(val);
    //   node.appendChild(textNode);
    //   document.getElementById('output').appendChild(node);
    // }



    /**
     *
     *
     */

  }

}
