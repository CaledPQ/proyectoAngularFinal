import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopersonalchildComponent } from './infopersonalchild.component';

describe('InfopersonalchildComponent', () => {
  let component: InfopersonalchildComponent;
  let fixture: ComponentFixture<InfopersonalchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopersonalchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfopersonalchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
