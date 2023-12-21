import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Tab } from '../../enum/tab.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  gamificationUserId = environment.gamification.userId;
  gamificationAppId = environment.gamification.applicationId;
  logoUrl = `${environment.blobEndpoint}/${environment.containerName}/flag.svg`;
  showTripContainer = false;
  tripId = '';
  tab = 1;
  constructor() {}

  showTrips() {
    this.showTripContainer = !this.showTripContainer;
  }

  closeContainer(tripId: any) {
    if (tripId) {
      this.tripId = tripId;
      this.tab = Tab.RATING;
    }

    this.showTripContainer = false;
  }
  openHomePage() {
    this.tab = Tab.HOME;
  }
}
