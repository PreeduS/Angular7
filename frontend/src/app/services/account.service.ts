import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()                               // allows Services into Services injection
export class AccountService {
    
    accounts = [{
        name:'test',
        description: 'desc'
    }]
    constructor(private loggingService: LoggingService){}

    addAccount(){
        this.accounts.push({
            name: `test ${this.accounts.length +1}`,
            description: `desc`
        })
        this.loggingService.logStatusChange('added account')
    }
    removeAccount(){
        this.accounts.pop();
    }
    
}