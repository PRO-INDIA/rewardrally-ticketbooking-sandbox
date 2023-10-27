import { Component, Input, OnInit } from '@angular/core';
import { Gamification } from '@theproindia/pro-gamification';
import { environment } from '../../../environments/environment';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css'],
})
export class BusDetailComponent implements OnInit {
  constructor(
    public gamification: Gamification,
    public modalService: ModalService
  ) {}
  @Input() busDetails: any;
  containerName = environment.containerName;
  blobEndPoint = environment.blobEndpoint;
  togglePaymet: boolean = false;
  rewardPoints: any;

  sasToken: string =
    '?sv=2022-11-02&ss=b&srt=sco&sp=rl&se=2023-09-29T20:31:56Z&st=2023-06-26T12:31:56Z&spr=https&sig=YCdfDxg%2FahnmjRUqgBGCGPNGw7yFQFaUGtY%2FMUYgvRM%3D';

  busFacility: string = `${this.blobEndPoint}/${this.containerName}/bus-facility.png`;

  seats: string = `${this.blobEndPoint}/${this.containerName}/seats.png`;

  ngOnInit(): void {}

  async bookTicket() {
    this.rewardPoints = await this.gamification.updateGameAction(
      environment.gamification.userId,
      environment.gamification.gameId,
      '',
      ''
    );

    this.modalService.modalStateData.next({
      headerText: 'Booked Successfully',
      pointsText: 'Points',
      points: this.rewardPoints.points,
    });
    this.modalService.openModal();
  }
  togglePayment() {
    this.togglePaymet = !this.togglePaymet;
  }
}
