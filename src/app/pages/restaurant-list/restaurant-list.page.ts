import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit{
  restaurants: any[] = [];
  skip: number = 0;
  limit: number = 10;
  isLoading: boolean = false;
  items = [];
  constructor(private restaurantService: RestaurantService ) {
    
   }

  ngOnInit() {
    this.getData();
    console.log('test');
    
  }

  getData() {
    this.isLoading = true;
    this.restaurantService.getFeedData(0,0,this.limit,this.skip).subscribe((data: any) => {
      this.restaurants = this.restaurants.concat(data); 
      this.skip += this.limit; 
      this.isLoading = false; 
    });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    console.log('Loading more restaurants...');
    this.getData();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);

  }
}
