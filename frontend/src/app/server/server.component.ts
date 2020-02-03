import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Observable, Observer, Subscription, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators'


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit, OnDestroy {
    constructor(private router: Router, private route: ActivatedRoute){}
    myObservableSub: Subscription;
    subjectSub: Subscription;
    navigateToUsers(){
        // this.router.navigate(['/users'])
        // this.router.navigate(['users/1'],{relativeTo: this.route})
        this.router.navigate(['users',2], {queryParams:{ id:5 }, fragment:'loading'} )

        // queryParamsHandling -  'merge' | 'preserve' 
    }

    ngOnInit(){
        
        const numbers = interval(1000).pipe(
            map(nr => nr * 2),
            take(5)
        );
        const nrSub = numbers.subscribe((number: number) => {
             console.log('number: ',number);
            if(number > 10){
                nrSub.unsubscribe();
            }
        })

        const myObservable = Observable.create((observer: Observer<string>) => {
            let counter = 0;
            setTimeout(() => {
                observer.next(`next: ${counter}`); counter++;
            }, 1000)
            setTimeout(() => {
                observer.next(`next: ${counter}`); counter++;
            }, 2000)
            setTimeout(() => {
                // observer.error(`error: ${counter}`);
                observer.complete();
                
            }, 3000)
        })
        
        this.myObservableSub = myObservable.subscribe((result)=>{
            // console.log('result: ',result);

        }, (error) => {
            console.log('error: ',error);
        }, () => {
            console.log('completed');
        })


        // subject = observable + observer
        const subject = new Subject();
        setTimeout(() => {
            subject.next('subject next')
        }, 5000);

        this.subjectSub = subject.subscribe((subject) => {
            console.log('subject: ',subject)
        }, error => console.log('error: ', error))

    }

    ngOnDestroy(){
        this.myObservableSub.unsubscribe();
        this.subjectSub.unsubscribe();
        
    }
}