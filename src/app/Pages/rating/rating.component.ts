import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../Services/modal.service';
import { TicketService } from '../../Services/ticket.service';
import { Gamification } from '@stagetheproindia/pro-gamification';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Output() closeContainer = new EventEmitter<boolean>();
  constructor(
    public activatedRoute: ActivatedRoute,
    public ticketService: TicketService,
    public modalService: ModalService,
    public gamification: Gamification,
    public route: Router
  ) {}
  showErrorText: boolean = false;
  ticketId: string = '';
  tripDetails: any;
  trip: any;
  rewardPoints: any;
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
      this.resetForm();
      //Paste the copied code here
      this.gamification.updateGameAction(
        environment.gamification.userId,
        environment.gamification.gameId,
        '',
        ''
      );
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
    this.rating = 0;
  }
  openHomePage() {
    this.closeContainer.emit(false);
    this.route.navigateByUrl('/book-ticket');
  }
}
