import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurahComponent } from './view-surah.component';

describe('ViewSurahComponent', () => {
  let component: ViewSurahComponent;
  let fixture: ComponentFixture<ViewSurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSurahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
