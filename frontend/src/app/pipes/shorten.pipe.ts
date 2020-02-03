import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value, limit = 3){
        return value.substr(0,limit)
    }
}


// add to module declarations