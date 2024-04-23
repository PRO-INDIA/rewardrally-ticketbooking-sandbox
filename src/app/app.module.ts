import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookTicketComponent } from './Components/book-ticket/book-ticket.component';
import { BrowserModule } from '@angular/platform-browser';
import { BusDetailComponent } from './Components/bus-detail/bus-detail.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { ModalComponent } from './Components/modal/modal.component';
import { NgModule } from '@angular/core';
import { OfferComponent } from './Components/offer/offer.component';
import { RatingComponent } from './Pages/rating/rating.component';
import { RewardRallyModule } from '@stagetheproindia/rewardrally';
import { StarRatingComponent } from './Components/star-rating/star-rating.component';
import { StarRatingModule } from 'angular-star-rating';
import { TripsComponent } from './Components/trips/trips.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ConfirmDialogComponent,
    BookTicketComponent,
    OfferComponent,
    BusDetailComponent,
    FooterComponent,
    TripsComponent,
    RatingComponent,
    StarRatingComponent,
    ModalComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RewardRallyModule.forRoot({
      clientId: environment.clientId,
      clientSecret: environment.clientSecret,
    }),
    StarRatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
