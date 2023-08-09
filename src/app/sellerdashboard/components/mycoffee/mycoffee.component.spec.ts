import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoffeeComponent } from './mycoffee.component';

describe('MycoffeeComponent', () => {
  let component: MycoffeeComponent;
  let fixture: ComponentFixture<MycoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycoffeeComponent]
    });
    fixture = TestBed.createComponent(MycoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
