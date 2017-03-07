import { async, TestBed } from '@angular/core/testing';
import { AnotherComponent } from './another.component';
describe('AnotherComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AnotherComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AnotherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/first-app/src/app/other/another.component.spec.js.map