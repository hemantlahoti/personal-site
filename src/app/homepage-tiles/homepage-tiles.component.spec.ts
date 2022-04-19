import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTilesComponent } from './homepage-tiles.component';

describe('HomepageTilesComponent', () => {
  let component: HomepageTilesComponent;
  let fixture: ComponentFixture<HomepageTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
