import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueReviewComponent } from './league-review.component';

describe('LeagueReviewComponent', () => {
  let component: LeagueReviewComponent;
  let fixture: ComponentFixture<LeagueReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
