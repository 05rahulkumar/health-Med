import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountPagesComponent } from './my-account-pages.component';

describe('MyAccountPagesComponent', () => {
  let component: MyAccountPagesComponent;
  let fixture: ComponentFixture<MyAccountPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
