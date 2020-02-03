import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appHighlight2]'
})

export class Highlight2Directive implements OnInit{
    @HostBinding('style.backgroundColor') bgColor: string = 'gray';                 // initial value
    @Input() highlightColor: string = 'green';
    @Input() appHighlight2: string;                                                 // same name as selector
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }
    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid '+ this.highlightColor);
    }

    @HostListener('mouseenter') mouseenter(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid '+ this.highlightColor);

        this.bgColor = 'rgba(240,240,240)'
    }
    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid '+ this.appHighlight2);
        this.bgColor = 'initial'
    }
}