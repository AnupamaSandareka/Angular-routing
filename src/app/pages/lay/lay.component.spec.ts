import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayComponent } from './lay.component';

describe('LayComponent', () => {
  let component: LayComponent;
  let fixture: ComponentFixture<LayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayComponent]
    });
    fixture = TestBed.createComponent(LayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
