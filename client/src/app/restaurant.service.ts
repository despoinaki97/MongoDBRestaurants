import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { restaurant } from './restaurant';
 
@Injectable({
 providedIn: 'root'
})
export class restaurantService {
 private url = 'http://localhost:5200';
 private restaurants$: Subject<restaurant[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshrestaurants() {
   this.httpClient.get<restaurant[]>(`${this.url}/restaurants`)
     .subscribe(restaurants => {
       this.restaurants$.next(restaurants);
     });
 }
 
 getrestaurants(): Subject<restaurant[]> {
   this.refreshrestaurants();
   return this.restaurants$;
 }
 
 getrestaurant(id: string): Observable<restaurant> {
   return this.httpClient.get<restaurant>(`${this.url}/restaurants/${id}`);
 }
}