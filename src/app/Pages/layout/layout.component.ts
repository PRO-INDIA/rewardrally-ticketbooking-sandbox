import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CodeChangeService } from '../../Services/code-change.service';
import { Tab } from '../../enum/tab.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  gamificationUserId = environment.gamification.userId;
  gamificationAppId = environment.gamification.applicationId;
  logoUrl = `${environment.blobEndpoint}/${environment.containerName}/flag.svg?sv=2021-10-04&si=sandbox-assets-18674F72D96&sr=c&sig=rKjuSXkKkvZGBsbvSQEBAPdiHxKqfQ7U2s1I8Na%2FaE8%3D`;
  showTripContainer = false;
  tripId = '';
  tab = 1;
  constructor(private codeChangeService: CodeChangeService) {
    this.codeChangeService.trackCode(
      JSON.stringify(environment.gamification),
      'userDetails'
    );
  }

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
