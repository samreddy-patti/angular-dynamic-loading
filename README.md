[NgSwitch]:  https://angular.io/api/common/NgSwitch 
[NgIf]: https://angular.io/api/common/NgIf 
[ViewContainerRef]: https://angular.io/api/core/ViewContainerRef 
[ComponentFactoryResolver]: https://angular.io/api/core/ComponentFactoryResolver 
[NgModule]: https://angular.io/guide/ngmodules 
[blog]: http://www.techsams.com/js/angular/dynamic-component/Load-component-dynamically-in-angular.html 

## [www.techsams.com][blog]
# Angular dynamic component loading

There are many cases where we need to load components dynamically. For example, if you have component factory (same kind of components but with different behaviour ) and want to load only one component based on need. Most common situations are loading component in overlay or if you have set of tabs. In this article I am going to use a tab set.

Let's assume you have two tabs called **One** and **Two**. **One** tab body is with **TabOneComponent** and **Two** tab body is with **TabTwoComponent**. When user clicks on tabs we want to load appropriate tab body.

## Ways of loading components dynamically
Angular support different approach to load component dynamically. Most common and easy ways are conditionally loading with [NgIf][NgIf] or [NgSwitch][NgSwitch] directives and using [ComponentFactoryResolver][ComponentFactoryResolver] with [ViewContainerRef][ViewContainerRef] API. Let see how both approach works.

 
## Through condition
### [NgIf][NgIf] directive
```html
<ng-container *ngIf="tab === 'one'; else two">
  <tab-one> <tab-one>
</ng-container>
<ng-template #two>
    <tab-two> <tab-two>
</ng-template>
```
### [NgSwitch][NgSwitch] directive
```html
<ng-container [ngSwitch]="tab">
  <tab-one *ngSwitchCase="'one'"> </tab-one>
  <tab-two *ngSwitchCase="'two'"> </tab-two>
</ng-container>
```
[Demo][blog]
## Through API
* Create a component which you want to load dynamically. You can use Angular-cli **ng g c** command for the same
* Add newly created component in declarations attribute of [NgModule][NgModule] . If you are using Angular-cli it would have done already
* Add the component in **entryComponents** attribute. This step is mandatory to load the component dynamically
* Where ever you want to add the component dynamically, place **<ng-container>** element in html template
* Use [ComponentFactoryResolver][ComponentFactoryResolver] and [ViewContainerRef][ViewContainerRef] API to create the component
```javascript
  export class AppComponent implements OnInit {
  @ViewChild('tabBody', { read: ViewContainerRef })
  componentContainer: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {

  }
  public ngOnInit(): void {
    this.loadTab();
  }
  loadTab() {
    this.componentContainer.clear();
    const component = this.resolver.resolveComponentFactory<TabBaseComponet>(TabOneComponent);
    const componentRef = this.componentContainer.createComponent(component);
  // This is very importent to call the life cycle hoots of component
    componentRef.changeDetectorRef.detectChanges();
  /* 
       If you want to call methods of tab component use instance attribute. For example,
       componentRef.instance.increaseCounter();
    */
  }
  ...
}
  ```
# [Demo][blog]
 
