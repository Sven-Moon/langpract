import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, share } from 'rxjs';

/****** Cold vs Hot ******
 * Cold observables receive 'cold' (old) values,
 * That is, an observer starts a stream, then is later
 * subscribed to, THE SUBSCRIBER RECEIVES VALUES EMITTED
 * PRIOR TO SUBSCRIPTION
 *
 * Hot observables, by contrast, only receive the values
 * emitted since being subscribed (hot off the press)
 */

@Component({
  selector: 'app-hot-cold',
  templateUrl: './hot-cold.component.html',
  styleUrls: ['./hot-cold.component.css']
})
export class HotColdComponent implements OnInit {
  coldOutput = []
  hotOutput = []
  coldSub2
  hotSub2

  constructor() { }

  ngOnInit(): void {

    /** COLD OBSERVABLE
     * Cold observables will see the entire stream because
     * that's where they start -- the beginning
     * 1. creates the producer
     * 2. activates the producer
     * 3. starts listening to the producer
     * 4. unicast
     */

    var coldOb = new Observable((x) => {
      let i = 0
      setInterval(() => {
        x.next(i)
        i++
      }, 1000)
    })

    // (3)
    var coldSub1 = coldOb.subscribe((x) => this.coldOutput.push('cold1: ' + x))
    // (4) each subscription gets its own instance so it'll start at the beginning of the stream
    setTimeout(() => {
      this.coldSub2 = coldOb.subscribe((x) => this.coldOutput.push('cold2: ' + x))
    }, 2500);

    setTimeout(() => {
      coldSub1.unsubscribe()
      this.coldSub2.unsubscribe()
    }, 5001);


    /** HOT OBSERVABLE
     * Observables are HOT when their producers are
     * created/activated OUTSIDE of the SUBSCRIPTION.
     * Hot observables will only see the latest emitted
     * values (unless specified otherwise using replay(),
     * etc.)
     * -- use either share() or a SUBJECT
     * 1. shares a reference to a producer
     * 2. starts listening to the producer
     * 3. multicast (usually)
    */

    /**
     * using share()
    */
    const hotSource = interval(1000)
      .pipe(share())

    var hotSub1 = hotSource.subscribe((x) => this.hotOutput.push('hot1: ' + x))
    setTimeout(() => {
      this.hotSub2 = hotSource.subscribe((x) => this.hotOutput.push('hot2: ' + x))
    }, 2500);


    setTimeout(() => {
      hotSub1.unsubscribe()
      this.hotSub2.unsubscribe()
    }, 5001);

    /** output:
      hot1: 0
      hot1: 1
      hot1: 2
      hot2: 2  // hot 2 starts at 2, not 0
      hot1: 3
      hot2: 3
      hot1: 4
      hot2: 4
     */


    /**
     * using a subject
     */



  }

}
