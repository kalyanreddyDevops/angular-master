import {Directive, 
    Input, OnInit, ElementRef, Renderer, HostListener
} from "@angular/core";


        // <p highlight >
        //<span highlight
@Directive({
    //[] must for selector
    selector: "[highlight]"
})
export class HighlightDirective  implements OnInit {
   @Input()
    color: string = "green";
    
    //Dependency injection
    constructor(private element:ElementRef,
                private renderer: Renderer) {

    }

    ngOnInit() {
       // this.setColor(this.color);
    }

 @HostListener("mouseenter")onMouseEnter(){
     this.setColor(this.color);
 }

 @HostListener("mouseleave")onMouseLeave(){
     this.setColor("");
 }



    setColor(bgColor: string) {
        this.renderer.setElementStyle(
            this.element.nativeElement,
            "background",
            bgColor
        )
    }

}