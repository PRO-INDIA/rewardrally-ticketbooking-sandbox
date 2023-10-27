import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../Services/ticket.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  trips: any = this.ticketService.trips;
  @Output() closeContainer = new EventEmitter<string>();
  constructor(public ticketService: TicketService, public route: Router) {}

  ngOnInit(): void {
    this.trips = this.ticketService.trips;
  }
  openRatingPage(trip: any) {
    this.closeContainer.emit(trip.ticketId);
  }
}
