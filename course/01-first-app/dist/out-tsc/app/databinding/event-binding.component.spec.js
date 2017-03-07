import { async, TestBed } from '@angular/core/testing';
import { EventBindingComponent } from './event-binding.component';
describe('EventBindingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EventBindingComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EventBindingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/first-app/src/app/databinding/event-binding.component.spec.js.map