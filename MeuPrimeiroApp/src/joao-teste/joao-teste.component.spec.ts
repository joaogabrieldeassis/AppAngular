import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoaoTesteComponent } from './joao-teste.component';

describe('JoaoTesteComponent', () => {
  let component: JoaoTesteComponent;
  let fixture: ComponentFixture<JoaoTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoaoTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoaoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
