import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {
  myOutput = []

  constructor() { }

  ngOnInit(): void {
    /** */

    /**
     * this module shows how unsubscribing to an observer
     * stops receipt of a stream.
     * In particular it shows how you can chain subscriptions using
     * subsc1.add(subsc2) and that unsubscribing to subscr1
     * unsubscribes both
     */

    // emission function = "observer"
    const observer1 = (data) => {
      try {
        data.next('First emission')
        setInterval(() => {
          data.next('I Repeat')
        }, 1000)
      }
      catch (err) {
        data.error(err)
      }
    }

    // create the observable, supplying the observer
    var observable1 = new Observable(observer1)

    // create a subscription
    var subscribe1a = observable1.subscribe({
      next: x => this.myOutput.push('obs 1: ' + x),
      error: (error) => this.myOutput.push(error),
      complete: () => this.myOutput.push('Completed')
    })

    // create a second subscription
    var subscribe1b = observable1.subscribe((x) =>
      this.myOutput.push('obs 2: ' + x)
    )

    /**
     * at this point, subscription 1a will discontinue while
     * subscription 1b will continue to produce after the unsubscribe,
     * but when we chain them together using subsc1a.add(subscr1b),
     * they will be simultaneously unsubscribed
     */

    // chain together
    subscribe1a.add(subscribe1b)

    // unsubscribe to subscribe1, unsubscribes for both
    // subscribe 1a & 1b
    setTimeout(() => {
      subscribe1a.unsubscribe() // also unsubscribes 1b b/c of the .add()
    }, 3001)
  }

  /**
   * obs 1: First emission
    obs 2: First emission
    obs 1: I Repeat
    obs 2: I Repeat
    ...
    obs 1: I Repeat
    obs 2: I Repeat
    obs 2: I Repeat
    obs 2: I Repeat
    ...
   */

}
