import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';


import { interval } from 'rxjs';
import { take, timeInterval } from 'rxjs/operators'

export interface CarouselContext {
    $implicit : string,
    controller : {
        next : () => void;
        prev : () => void;
    }
}

@Directive({ selector: '[carousel]' })
export class CarouselDirective implements OnInit {
    constructor(
        private viewContainerRef : ViewContainerRef,
        private temRef : TemplateRef<CarouselContext>
    ) { }

    @Input('carouselFrom') images : string[];

    context: CarouselContext | null = null;
    index: number = 0;

    private repeat$  = interval(8000 /* ms */)
    .pipe(
        timeInterval(),
    )

    ngOnInit(){
        this.context = {
            $implicit: this.images[0],
            controller: {
                next: () => this.next(),
                prev: () => this.prev()
            }
        }; 

        this.viewContainerRef.createEmbeddedView(this.temRef, this.context);


        this.repeat$.subscribe(
            ()=>{ 
                this.next() 
            }
        )
    }

    next(): void{
        this.index++;
        if (this.index >= this.images.length) {
            this.index = 0;
        }
        this.context.$implicit = this.images[this.index]
    }

    prev(): void{
        this.index--;
        if (this.index < 0 ) {
            this.index = this.images.length - 1;
        }
        this.context.$implicit = this.images[this.index]
    }
}