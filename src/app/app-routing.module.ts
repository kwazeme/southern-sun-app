import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenCourtComponent } from './garden-court/garden-court.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { HotelEditComponent } from './hotels/hotel-edit/hotel-edit.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ResortsComponent } from './resorts/resorts.component';

const routes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'}, //default route
  {path: 'hotels', component: HotelsComponent,
  children: [
    {path: 'new', component: HotelEditComponent},
    {path: ':id/edit', component: HotelDetailComponent},

  ]}, //hotel children routes

  {path: 'resorts', component: ResortsComponent,
  children: []}, //Resorts children routes

  {path: 'garden-courts', component: GardenCourtComponent,
  children: []}, //Garden Courts children routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
