import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameLibraryComponent } from './name-library.component';

describe('NameLibraryComponent', () => {
  let component: NameLibraryComponent;
  let fixture: ComponentFixture<NameLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
