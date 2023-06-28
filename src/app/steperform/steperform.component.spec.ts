import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperformComponent } from './steperform.component';

describe('SteperformComponent', () => {
  let component: SteperformComponent;
  let fixture: ComponentFixture<SteperformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SteperformComponent]
    });
    fixture = TestBed.createComponent(SteperformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
