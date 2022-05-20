import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuienesSomosComponent } from './page-quienes-somos.component';

describe('PageQuienesSomosComponent', () => {
  let component: PageQuienesSomosComponent;
  let fixture: ComponentFixture<PageQuienesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageQuienesSomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
