import { async, TestBed } from '@angular/core/testing';
import { OtherComponent } from './other.component';
describe('OtherComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OtherComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OtherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/erin/EB Projects/Angular2-Practice/first-app/src/app/other/other.component.spec.js.map