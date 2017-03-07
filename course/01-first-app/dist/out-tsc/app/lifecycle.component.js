var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChild } from '@angular/core';
export var LifecycleComponent = (function () {
    // @ViewChild('boundParagraph') boundParagraph: HTMLElement;
    function LifecycleComponent() {
        this.bindable = 1000;
    }
    LifecycleComponent.prototype.ngOnChanges = function () {
        this.log('ngOnChanges');
    };
    LifecycleComponent.prototype.ngOnInit = function () {
        this.log('ngOnInit');
    };
    LifecycleComponent.prototype.ngDoCheck = function () {
        this.log('ngDoCheck');
    };
    LifecycleComponent.prototype.ngAfterContentInit = function () {
        this.log('ngAfterContentInit');
        console.log(this.boundContent);
    };
    LifecycleComponent.prototype.ngAfterContentChecked = function () {
        this.log('ngAfterContentChecked');
    };
    LifecycleComponent.prototype.ngAfterViewInit = function () {
        this.log('ngAfterViewInit');
        // console.log(this.boundParagraph);
    };
    LifecycleComponent.prototype.ngAfterViewChecked = function () {
        this.log('ngAfterViewChecked');
    };
    LifecycleComponent.prototype.ngOnDestroy = function () {
        this.log('ngOnDestroy');
    };
    LifecycleComponent.prototype.log = function (hook) {
        console.log(hook);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], LifecycleComponent.prototype, "bindable", void 0);
    __decorate([
        ContentChild('boundContent'), 
        __metadata('design:type', HTMLElement)
    ], LifecycleComponent.prototype, "boundContent", void 0);
    LifecycleComponent = __decorate([
        Component({
            selector: 'fa-lifecycle',
            template: "\n    <ng-content></ng-content>\n    <hr>\n    <p #boundParagraph>{{bindable}}</p>\n    \n    <p>{{boundParagraph.textContent}}</p>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], LifecycleComponent);
    return LifecycleComponent;
}());
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/course/01-first-app/src/app/lifecycle.component.js.map