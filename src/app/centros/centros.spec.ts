import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosComponent } from './centros';

describe('Centros', () => {
  let component: CentrosComponent;
  let fixture: ComponentFixture<CentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
