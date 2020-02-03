import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value, filterString = ''){
        if(value.length === 0){
            return value;
        }
        return value.filter( x => x.status === filterString)
        
    }
}

