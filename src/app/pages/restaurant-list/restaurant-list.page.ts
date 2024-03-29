import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit{
  restaurants: any[] = [];
  constructor(private restaurantService: RestaurantService ) {
    
   }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.restaurantService.getFeedData(0,0,0,0).subscribe((data) => {
      console.log(data); 
      this.restaurants.push(data);
    });
  }
}
