import { async, TestBed } from '@angular/core/testing';
import { PropertyBindingComponent } from './property-binding.component';
describe('PropertyBindingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PropertyBindingComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PropertyBindingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/first-app/src/app/databinding/property-binding.component.spec.js.map