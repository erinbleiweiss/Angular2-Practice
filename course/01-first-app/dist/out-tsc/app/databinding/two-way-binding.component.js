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
export var TwoWayBindingComponent = (function () {
    function TwoWayBindingComponent() {
        this.person = {
            name: 'Erin',
            age: 23
        };
    }
    TwoWayBindingComponent = __decorate([
        Component({
            selector: 'fa-two-way-binding',
            template: "\n    <input type=\"text\" [(ngModel)]=\"person.name\">\n    <input type=\"text\" [(ngModel)]=\"person.name\">\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], TwoWayBindingComponent);
    return TwoWayBindingComponent;
}());
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/course/01-first-app/src/app/databinding/two-way-binding.component.js.map