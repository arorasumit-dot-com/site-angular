import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokenPageComponent } from './spoken-page.component';

describe('SpokenPageComponent', () => {
  let component: SpokenPageComponent;
  let fixture: ComponentFixture<SpokenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpokenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
