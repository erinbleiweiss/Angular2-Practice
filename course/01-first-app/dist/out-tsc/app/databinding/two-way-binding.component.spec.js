import { async, TestBed } from '@angular/core/testing';
import { TwoWayBindingComponent } from './two-way-binding.component';
describe('TwoWayBindingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TwoWayBindingComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TwoWayBindingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/first-app/src/app/databinding/two-way-binding.component.spec.js.map