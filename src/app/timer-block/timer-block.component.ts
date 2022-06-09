import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-timer-block',
  templateUrl: './timer-block.component.html',
  styleUrls: ['./timer-block.component.css'],
})
export class TimerBlockComponent implements OnInit, AfterViewInit {
  @Input() flip!: boolean;
  @Input() env!: number;
  bgColor: string = 'bg--violet';
  bxUpper: Array<ElementRef> = []; // type for array of html collection
  bxLower: Array<ElementRef> = [];
  @ViewChildren('boxesUpper') boxesUpper!: QueryList<ElementRef>;
  @ViewChildren('boxesLower') boxesLower!: QueryList<ElementRef>;
  interval: any;
  timeDown!: number;

  //array for ngFor
  arrSize = (i: number) => new Array(i);
  //flip the top triangle
  styleTimerBlock(): Object {
    return {
      transform: this.flip ? 'rotate(180deg)' : 'rotate(0)',
    };
  }
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  changingBoxes() {
    if (this.bxUpper.length > 0) {
      this.renderer.removeClass(
        this.bxUpper.pop()?.nativeElement,
        this.bgColor
      );
    }
    if (this.bxLower.length > 0) {
      this.renderer.addClass(this.bxLower.pop()?.nativeElement, this.bgColor);
      //pop()? for ts , because can be undefined
    }
  }

  timer() {
    this.timeDown--;
  }

  ngOnInit(): void {
    this.timeDown = this.env;
    this.interval = setInterval(() => {
      this.timer();
      this.changingBoxes();
      if (this.timeDown === 0) clearInterval(this.interval);
    }, (this.env / 5) * 1000); // 5- number of blocks, depending on a number of blocks time will be calculated
  }

  ngAfterViewInit() {
    this.bxUpper = this.boxesUpper.toArray();
    this.bxLower = this.boxesLower.toArray();
  }
}
