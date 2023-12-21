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
  @Output() closeContainer = new EventEmitter<number>();
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

  async addReview() {
    if (this.rating && this.feedback) {
      this.resetForm();
      //Paste the copied code here
      this.rewardPoints = await this.gamification.updateGameAction(
        environment.gamification.userId,
        '65841dfa2371873e8b8f3aa6',
        '',
        ''
      );
      this.modalService.modalStateData.next({
        headerText: 'Booked Successfully',
        pointsText: 'Points',
        points: this.rewardPoints.points,
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
    this.rating = 0;
  }
  openHomePage() {
    this.closeContainer.emit(1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
