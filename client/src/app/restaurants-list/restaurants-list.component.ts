import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { restaurant } from '../restaurant';
import { restaurantService } from '../restaurant.service';
 
@Component({
 selector: 'app-restaurants-list',
 templateUrl: './restaurants-list.component.html',
 styleUrls: ['./restaurants-list.component.css']

})

export class restaurantsListComponent implements OnInit {
 restaurants$: Observable<restaurant[]> = new Observable();

 constructor(private restaurantsService: restaurantService) { }
 
 ngOnInit(): void {
   this.fetchrestaurants();
 }

 
 private fetchrestaurants(): void {
   this.restaurants$ = this.restaurantsService.getrestaurants();
 }  

}