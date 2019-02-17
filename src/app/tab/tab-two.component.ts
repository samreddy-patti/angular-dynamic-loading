import { Component } from '@angular/core';
import {TabBaseComponet} from './tab.component';
@Component({
    selector: 'tab-two',
    template: `
        <p>Tab 2</p>
        <p>Counter - {{counter}}</p>
        <div>
            <button type="button" class="btn btn-primary" (click)="increaseCounter()">Increase</button>
        </div>
    `,
})
export class TabTwoComponent extends TabBaseComponet{
    constructor() {
        super();
        console.log('Tab two constructor called');
    }
    
}
