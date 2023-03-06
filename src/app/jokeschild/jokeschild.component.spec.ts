import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeschildComponent } from './jokeschild.component';

describe('JokeschildComponent', () => {
  let component: JokeschildComponent;
  let fixture: ComponentFixture<JokeschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeschildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
