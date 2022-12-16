import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from '../hotels.model';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'sun-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {
  hotels: Hotel[] = [];
  subscription: Subscription;
  id: string;

  constructor(
    private hotelsService: HotelsService,
  ) { }

  ngOnInit(): void {
    this.hotelsService.getHotelbyId(this.id);
    this.subscription = this.hotelsService.getHotelUpdateListener()
      .subscribe((hotels: Hotel[]) => {
        this.hotels = hotels;
      });
  }

}
