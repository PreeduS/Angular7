import { Directive, ElementRef, OnInit, Input, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit{
    @Input() open: boolean = false;
    constructor(private elementRef: ElementRef){
    }

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggle(){
        this.isOpen = !this.isOpen;
        console.log(this.elementRef.nativeElement.querySelector('.dropdown-menu').className)

        this.elementRef.nativeElement.querySelector('.dropdown-menu').className = 'dropdown-menu' + (this.isOpen ? ' show':'')
    }
    ngOnInit(){
        if(open){
            // this.elementRef.nativeElement.style.class += ' open';
        }
    }
}