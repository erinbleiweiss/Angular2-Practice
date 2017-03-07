var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
export var EventBindingComponent = (function () {
    function EventBindingComponent() {
        this.clicked = new EventEmitter();
    }
    EventBindingComponent.prototype.onClicked = function () {
        this.clicked.emit('It works!');
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], EventBindingComponent.prototype, "clicked", void 0);
    EventBindingComponent = __decorate([
        Component({
            selector: 'fa-event-binding',
            template: "\n    <button (click)=\"onClicked()\">Click me!</button>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], EventBindingComponent);
    return EventBindingComponent;
}());
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/course/01-first-app/src/app/databinding/event-binding.component.js.map