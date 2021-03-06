import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-looping-rhombuses-spinner',
  template: `
    <div class="looping-rhombuses-spinner" [ngStyle]="spinnerStyle">
      <div class="rhombus"
           *ngFor="let rs of rhombusesStyles"
           [ngStyle]="rs">
      </div>
    </div>
  `,
  styleUrls: ['./looping-rhombuses-spinner.component.css']
})
export class LoopingRhumbusesSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 2500;
  @Input() rhombusSize = 15;
  @Input() color = '#fff';

  rhombusesNum = 3;

  get spinnerStyle(): object {
    return {
      height: `${this.rhombusSize}px`,
      width: `${this.rhombusSize * 4}px`
    };
  }

  get rhombusStyle(): object {
    return {
      height: `${this.rhombusSize}px`,
      width: `${this.rhombusSize}px`,
      background: this.color,
      animationDuration: `${this.animationDuration}ms`,
      left: `${this.rhombusSize * 4}px`
    };
  }

  get rhombusesStyles(): object {
    const rhombusesStyles = [];
    const delay = -this.animationDuration / 1.5;
    for (let i = 1; i <= this.rhombusesNum; i++) {
      const style = Object.assign({
        animationDelay: `${i * delay}ms`
      }, this.rhombusStyle);
      rhombusesStyles.push(style);
    }
    return rhombusesStyles;
  }

  ngOnInit() {
    
  }

}
