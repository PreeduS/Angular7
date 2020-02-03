import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

type UserData = {userData: string}

export class UserResolver implements Resolve<UserData>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserData {
        return {
            userData: 'userData '+ route.params['id']
        }
    }
}