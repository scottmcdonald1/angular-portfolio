import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleFolderComponent } from './circle-folder.component';

describe('CircleFolderComponent', () => {
  let component: CircleFolderComponent;
  let fixture: ComponentFixture<CircleFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
