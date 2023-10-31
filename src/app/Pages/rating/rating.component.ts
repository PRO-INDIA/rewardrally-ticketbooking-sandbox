import { CodeChangeService } from '../../Services/code-change.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../Services/modal.service';
import { TicketService } from '../../Services/ticket.service';
import { Gamification } from '@stagetheproindia/pro-gamification';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Output() closeContainer = new EventEmitter<number>();
  constructor(
    public activatedRoute: ActivatedRoute,
    public ticketService: TicketService,
    public modalService: ModalService,
    public gamification: Gamification,
    public route: Router,
    private codeChangeService: CodeChangeService
  ) {}
  showErrorText: boolean = false;
  ticketId: string = '';
  tripDetails: any;
  trip: any;
  rewardPoints: any;
  @Input() tripId = '';
  @Input() tab = 0;
  @Input() busDeatails: any = {};
  rating = 0;
  feedback = '';
  ngOnInit(): void {
    this.tripDetails = this.ticketService.trips.filter((trip) => {
      return trip.ticketId == this.tripId;
    });
    this.trip = this.tripDetails[0];
  }

  addReview() {
    if (this.rating && this.feedback) {
      this.resetForm();
      //Paste the copied code here
      this.gamification.updateGameAction(
        '3897fa0d-ac99-4b59-a886-35566abf1301',
        '654098dc3b35500e3f4789b9',
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
    this.closeContainer.emit(1);
  }
}
