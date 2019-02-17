import { Component, Input } from '@angular/core';
import {TabBaseComponet} from './tab.component';
@Component({
    selector: 'tab-one',
    template: `
        <p>Tab 1</p>
        <p>Counter - {{counter}}</p>
        <div>
            <button type="button" class="btn btn-primary" (click)="increaseCounter()">Increase</button>
        </div>
    `,
})
export class TabOneComponent extends TabBaseComponet{
    
    constructor() {
        super();
        console.log('Tab one constructor called');
    }

}
