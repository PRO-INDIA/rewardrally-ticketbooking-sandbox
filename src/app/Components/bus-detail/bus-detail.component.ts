import { Component, Input, OnInit } from '@angular/core';
import { Gamification } from '@stagetheproindia/pro-gamification';
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
  @Input() index = 0;
  @Input() busDetails: any;
  containerName = environment.containerName;
  blobEndPoint = environment.blobEndpoint;
  togglePaymet: boolean = false;
  rewardPoints: any;

  sasToken: string =
    '?sv=2021-10-04&si=sandbox-assets-18674F72D96&sr=c&sig=rKjuSXkKkvZGBsbvSQEBAPdiHxKqfQ7U2s1I8Na%2FaE8%3D';

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
  togglePayment(busIndex: number) {
    this.togglePaymet = !this.togglePaymet;
    if (this.togglePaymet) {
      setTimeout(() => {
        let selectedUser = document.getElementById(
          'bus-' + busIndex
        ) as HTMLElement;

        if (selectedUser) {
          selectedUser.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }
}
