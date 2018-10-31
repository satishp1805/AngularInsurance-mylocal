import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdvisorsComponent } from './show-advisors.component';

describe('ShowAdvisorsComponent', () => {
  let component: ShowAdvisorsComponent;
  let fixture: ComponentFixture<ShowAdvisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAdvisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
