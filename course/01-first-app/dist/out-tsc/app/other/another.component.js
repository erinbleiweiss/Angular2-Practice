var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var AnotherComponent = (function () {
    function AnotherComponent() {
    }
    AnotherComponent.prototype.ngOnInit = function () {
    };
    AnotherComponent = __decorate([
        Component({
            selector: 'fa-another',
            template: "\n    <h1>another header</h1>\n    <article>\n      <ng-content></ng-content>\n    </article>\n  ",
            styles: ["\n    article {\n      border: 1px solid black;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AnotherComponent);
    return AnotherComponent;
}());
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/course/01-first-app/src/app/other/another.component.js.map