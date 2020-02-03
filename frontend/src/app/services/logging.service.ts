import { EventEmitter } from '@angular/core'

export class LoggingService {
    
    logStatusChange(status: string){
        console.log('logStatusChange ',status)
    }
    logUpdated = new EventEmitter<string>();
}