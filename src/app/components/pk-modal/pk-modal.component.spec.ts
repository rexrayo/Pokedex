import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkModalComponent } from './pk-modal.component';

describe('PkModalComponent', () => {
  let component: PkModalComponent;
  let fixture: ComponentFixture<PkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
