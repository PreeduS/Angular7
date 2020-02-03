import { Directive, ElementRef, OnInit, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appCustomIf]'
})

export class CustomIfDirective implements OnInit{
    @Input() set appCustomIf(value){
        if(value){
            this.vcRef.createEmbeddedView(this.templateRef);
        }else{
            this.vcRef.clear();
        }

    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){}
    ngOnInit(){
       
    }
}