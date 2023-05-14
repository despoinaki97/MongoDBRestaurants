import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { restaurantsListComponent } from './restaurants-list/restaurants-list.component';
 
const routes: Routes = [
 { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
 { path: 'restaurants', component: restaurantsListComponent }]; 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }