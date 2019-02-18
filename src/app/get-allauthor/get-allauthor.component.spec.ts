import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllauthorComponent } from './get-allauthor.component';

describe('GetAllauthorComponent', () => {
  let component: GetAllauthorComponent;
  let fixture: ComponentFixture<GetAllauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
