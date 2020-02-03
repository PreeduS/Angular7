import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        // console.log('intercept req: ', req)
        const updatedReq = req.clone({
            headers: req.headers.append('extraHeader','')               // .append, .set
        });
        // return next.handle(updatedReq)
        return next.handle(updatedReq).pipe(
            tap(val => console.log('tap val: ', val))
        )

        /*
            return this.store.select('auth')
            .take(1)
            .switchMap( (authState: AuthState) =>  {
                const updatedReq = req.clone({
                    params: req.params.set('auth', authState.token)              
                });
                return next.handle(updatedReq);
            })
        */
    }
}