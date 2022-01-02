import { Component, OnInit } from '@angular/core';
import { AsyncSubject, from, fromEvent, interval, map, multicast, Observable, observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})

/** SUBJECT TYPES
 * subject: starts with the NEXT value emitted
 * BehaviorSubject: starts with the LAST  value emitted
 * ReplaySubject: starts with last x values with max time y
 * AsyncSubject: ONLY gets the VERY LAST value & only after complete()
 */
export class SubjectsComponent implements OnInit {
  output1 = []
  output2 = []

  constructor() { }

  ngOnInit(): void {

    /** SUBJECT
     * subject.subscribe(...) describes what will happen
     * to the data from the stream
     */

    const subject = new Subject<number>();


    subject.subscribe({
      next: (x) => this.output1.push(`obsA: ${x}`)
    })

    setTimeout(() => {
      subject.subscribe({
        next: (x) => this.output1.push(`obsB: ${x}`)
      })
    }, 3000)


    var source = interval(1000)

    source.subscribe(subject)

    /** output:
    obsA: 0
    obsA: 1
    obsA: 2
    obsB: 2 // B joins in at 2
    obsA: 3
    obsB: 3
    */

    /** MULTICAST  */
    var multicastSource = interval(1000)
    const multicastSubject = new Subject()
    const multicasted = multicastSource.pipe(
      multicast(multicastSubject)
    )
  }

}
