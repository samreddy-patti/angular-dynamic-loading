import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { TabBaseComponet, TabOneComponent, TabTwoComponent } from './tab';

@Component({
  selector: 'my-app',
  template: `
        <div class="container">
            <ul class="nav nav-tabs">
                <li class="nav-item nav-link" *ngFor="let tab of tabs" [ngClass]="{'active': tab.id === tabId}">
                  <a (click)="tabOnClick(tab.id)">{{tab.label}}</a>
                </li>
            </ul>
            <div class="tab-body">
              <ng-container #tabBody></ng-container>
            </div>
        </div>
         <p class="bg-dark">
        <a  class="text-white" href="http://www.techsams.com/js/angular/dynamic-component/Load-component-dynamically-in-angular.html" target="_blank">www.techsams.com</a>
        </p>
    `,
})
export class AppComponent implements OnInit {
  @ViewChild('tabBody', { read: ViewContainerRef })
  componentContainer: ViewContainerRef;

  tabId: string = 'one';
  tabs = [
    {
      id: 'one',
      label: 'One',
      component: TabOneComponent
    },
    {
      id: 'two',
      label: 'Two',
      component: TabTwoComponent
    },
  ];
  constructor(private resolver: ComponentFactoryResolver) { }

  public ngOnInit(): void {
    this.loadTab();
  }

  tabOnClick(tabId: string) {
    this.tabId = tabId;
    this.loadTab();
  }

  loadTab() {
    const tab = this.tabs.find(tab => tab.id === this.tabId);
    this.componentContainer.clear();
    const component = this.resolver.resolveComponentFactory<TabBaseComponet>(tab.component);
    const componentRef = this.componentContainer.createComponent(component);

    // This is very importent to call the life cycle hoots of component
    componentRef.changeDetectorRef.detectChanges();
    /* 
       If you want to call methods of tab component use instance attribute. For example,
       componentRef.instance.increaseCounter();
    */

  }
}
