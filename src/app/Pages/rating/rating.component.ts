import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gamification } from '@theproindia/pro-gamification';
import { ModalService } from 'src/app/Services/modal.service';
import { TicketService } from 'src/app/Services/ticket.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  constructor(
    public gamification: Gamification,
    public activatedRoute: ActivatedRoute,
    public ticketService: TicketService,
    public modalService: ModalService
  ) {}
  showErrorText: boolean = false;
  ticketId: string = '';
  tripDetails: any;
  trip: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.ticketId = params['ticketId'];
      this.tripDetails = this.ticketService.trips.filter((trip) => {
        return trip.ticketId == this.ticketId;
      });
      this.trip = this.tripDetails[0];
    });
  }
  @Input() busDeatails: any = {};
  rating = 0;
  feedback = '';

  addReview() {
    if (this.rating && this.feedback) {
      this.gamification.updateGameAction(
        environment.gamification.userId,
        '642950539d6bdcf7cea24a91',
        '',
        ''
      );
      this.resetForm();
      this.modalService.modalStateData.next({
        headerText: 'Booked Successfully',
        pointsText: 'Points',
        points: '100',
      });
      this.modalService.openModal();
    } else {
      this.showErrorText = true;
    }
  }
  onRatingUpdated(rating: number): void {
    this.rating = rating;
  }
  resetForm() {
    this.showErrorText = false;
    this.feedback = '';
  }
}
