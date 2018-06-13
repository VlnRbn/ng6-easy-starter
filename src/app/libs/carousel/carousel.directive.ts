import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';


import { interval, Observable, from, Subject, BehaviorSubject } from 'rxjs';
import { take, timeInterval, switchMap, repeat, } from 'rxjs/operators'

export interface CarouselContext {
    $implicit: string,
    controller: {
        next: () => void;
        prev: () => void;
    }
}

@Directive({ selector: '[carousel]' })
export class CarouselDirective implements OnInit {

    private imageChanged$ = new BehaviorSubject<void>(null);

    @Input('carouselFrom') images: string[];

    context: CarouselContext | null = null;
    index: number = 0;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private temRef: TemplateRef<CarouselContext>
    ) { }

    ngOnInit() {
        this.context = {
            $implicit: this.images[0],
            controller: {
                next: () => this.next(),
                prev: () => this.prev()
            },
        };

        this.viewContainerRef.createEmbeddedView(this.temRef, this.context);

        this.imageChanged$.pipe(
            switchMap(
                () => interval(1000 /* ms */)
            )
        )
        .subscribe(
            (num) => {
                if (num == 5){
                    this.next()
                }
            }
        );
    
    }

    next(): void {
        this.index++;
        if (this.index >= this.images.length) {
            this.index = 0;
        }
        this.context.$implicit = this.images[this.index];
        this.imageChanged$.next(null);
    }

    prev(): void {
        this.index--;
        if (this.index < 0) {
            this.index = this.images.length - 1;
        }
        this.context.$implicit = this.images[this.index];
        this.imageChanged$.next(null);
    }
}