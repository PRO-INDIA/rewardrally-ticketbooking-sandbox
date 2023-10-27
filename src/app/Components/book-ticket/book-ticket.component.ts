import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css'],
})
export class BookTicketComponent {
  @Input() tab = 0;
  containerName = environment.containerName;
  blobEndPoint = environment.blobEndpoint;
  offers: any = [
    {
      title: 'Grab up to 10% offer',
      subTitle: 'on domestic hotels, outstation cabs & bus bookings.',
      imageSource: `${this.blobEndPoint}/${this.containerName}/image1.png`,
    },
    {
      title: 'Grab FLAT 8% OFF* on HDFC Credit Card',
      subTitle: 'on domestic hotels, outstation cabs & bus bookings.',
      imageSource: `${this.blobEndPoint}/${this.containerName}/image2.png`,
    },
    {
      title: 'Grab up to 10% offer',
      subTitle: 'on domestic hotels, outstation cabs & bus bookings.',
      imageSource: `${this.blobEndPoint}/${this.containerName}/image3.png`,
    },
    {
      title: 'Avail the offers with Rupay Credit Cards',
      subTitle: 'on domestic hotels, outstation cabs & bus bookings.',
      imageSource: `${this.blobEndPoint}/${this.containerName}/image4.png`,
    },
    {
      title: 'Now get up to 15% OFF* on flights, stays, cabs & buses',
      subTitle: 'on domestic hotels, outstation cabs & bus bookings.',
      imageSource: `${this.blobEndPoint}/${this.containerName}/image5.png`,
    },
    {
      title: 'Grab up to 10% offer',
      subTitle: 'on domestic hotels, outstation cabs & bus bookings.',
      imageSource: `${this.blobEndPoint}/${this.containerName}/image6.png`,
    },
  ];

  buses: any = [
    {
      name: 'Egloo travels',
      type: 'Sleeper 2+1',
      startPlace: 'Chennai',
      startTime: '21:30',
      endPlace: 'Kochi',
      endTime: '05:00',
      duration: '7h 30m',
      fare: '2,100',
      boardingPoint: 'Chennai',
      droppingPoint: 'Kochi',
      boardinglandMark: 'Near Anna Nagar',
      droppinglandMark: 'Near MG Road',
    },
    {
      name: 'Rathee Meena travels',
      type: 'NON AC Seater / Sleeper 2+1',
      startPlace: 'Chennai',
      startTime: '21:30',
      endPlace: 'Kochi',
      endTime: '05:00',
      duration: '7h 30m',
      fare: '1,950',
      boardingPoint: 'Chennai',
      droppingPoint: 'Kochi',
      boardinglandMark: 'Near Anna Nagar',
      droppinglandMark: 'Near MG Road',
    },
    {
      name: 'KPN Travels',
      type: 'NON AC Seater / Sleeper 2+1',
      startPlace: 'Chennai',
      startTime: '21:30',
      endPlace: 'Kochi',
      endTime: '04:30',
      duration: '7h 00m',
      fare: '2,000',
      boardingPoint: 'Chennai',
      droppingPoint: 'Kochi',
      boardinglandMark: 'Near Anna Nagar',
      droppinglandMark: 'Near MG Road',
    },
    {
      name: 'Vignesh TAT',
      type: 'AC Seater / Sleeper 2+1',
      startPlace: 'Chennai',
      startTime: '21:30',
      endPlace: 'Kochi',
      endTime: '04:30',
      duration: '7h 00m',
      fare: '1,600',
      boardingPoint: 'Chennai',
      droppingPoint: 'Kochi',
      boardinglandMark: 'Near Anna Nagar',
      droppinglandMark: 'Near MG Road',
    },
    {
      name: 'Intracity smartbus',
      type: 'AC Seater / Sleeper 2+1',
      startPlace: 'Chennai',
      startTime: '21:30',
      endPlace: 'Kochi',
      endTime: '04:30',
      duration: '7h 00m',
      fare: '1,700',
      boardingPoint: 'Chennai',
      droppingPoint: 'Kochi',
      boardinglandMark: 'Near Anna Nagar',
      droppinglandMark: 'Near MG Road',
    },
  ];
}
