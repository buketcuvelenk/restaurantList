import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantListPage } from './restaurant-list.page';

describe('RestaurantListPage', () => {
  let component: RestaurantListPage;
  let fixture: ComponentFixture<RestaurantListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
