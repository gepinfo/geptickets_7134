import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavescreenComponent } from './savescreen.component';

describe('SavescreenComponent', () => {
  let component: SavescreenComponent;
  let fixture: ComponentFixture<SavescreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavescreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});