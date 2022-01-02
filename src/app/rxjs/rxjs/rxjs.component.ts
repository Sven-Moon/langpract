import { Component, OnInit } from '@angular/core';
import { concatMapTo, from, fromEvent, interval, map, Observable, of, range, ReplaySubject, Subject, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  outputArray = []

  constructor() { }

  ngOnInit(): void {

    // NOT like this
    var observableVerbose = new Observable(function subscribe(observer) {
      observer.next('Hey')
    })

    // producer function = "observer"
    // producer function produces events
    const producerFcn = (data) => {
      data.next('First next')
      data.next('Second next')
      data.error('Error message')
      data.next('Won\'t be shown b/c after error')
      data.complete()
    }


    // less verbose
    var observable = new Observable(producerFcn)
    // var observable = new Observable((obs) => {

    // subscribe and do something with the data
    let subscription = observable.subscribe(data =>
      this.outputArray.push(data)
    )

    // this stops it
    subscription.unsubscribe()


  }

  public getSourceFromCreatorFunction() {
    /**
     * Creator functions are equivalent to
     * new Observable(observer)
     * where the observer is predefined
     */
    let frequency: number
    let bufferTimeWindow: number
    let numItemsToTake: number
    let source: Observable<any>

    /**
     * REGULAR TIMING
     */

    // interval: 0... infinity on set frequency
    var intervalSource: Observable<number> = interval(1000)


    // setInterval: regularly spaced range
    const setIntervalSubject =
      new ReplaySubject(numItemsToTake, bufferTimeWindow);
    let i = 1
    setInterval(() => setIntervalSubject.next(i++), frequency)


    // timer: delay start
    let timerDelay = 1000
    const timerSource = timer(timerDelay).pipe(
      tap(source => source)
    )



    /**
     * MANUAL
     */
    const observerFcn = (observer) => observer.next('Manual emission')
    var manualObservable = new Observable(observerFcn)

    // subject as an observer
    const manualSubjectAsObserver = new Subject<any>()
    manualSubjectAsObserver.next('Manual emission')



    /**
     * PREDETERMINED
     */
    var ofSource = of(1, 2, 3)

    var fromSource = from([1, 2, 3])

    var fromRange = range(10, 7)

    /**
     * REAL WORLD
     */
    var clickSource = fromEvent(document, 'click')

  }

}
