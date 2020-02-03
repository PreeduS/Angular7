import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.border = '1px solid blue';
    }
}