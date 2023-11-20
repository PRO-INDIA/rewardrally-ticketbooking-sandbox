import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  date = new Date(Date.now());
  dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor() {}

  tickets = [
    {
      id: 1,
      title: 'Ticket 1',
      description: 'Ticket 1 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
    {
      id: 2,
      title: 'Ticket 2',
      description: 'Ticket 2 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
    {
      id: 3,
      title: 'Ticket 3',
      description: 'Ticket 3 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
    {
      id: 4,
      title: 'Ticket 4',
      description: 'Ticket 4 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
    {
      id: 5,
      title: 'Ticket 5',
      description: 'Ticket 5 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
  ];

  addTickets(ticket: any) {
    this.tickets.push(ticket);
  }

  trips = [
    {
      date: this.date.getDate(),
      time: this.date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
      }),
      day: this.dayNames[this.date.getDay()],
      month: this.monthNames[this.date.getMonth()],
      year: this.date.getFullYear(),
      from: 'Chennai',
      to: 'Madurai',
      boarding: 'Guindy',
      drop: 'Mattuthavani',
      rating: 0,
      travels: 'YBM Travels',
      isRated: false,
      ticketId: '3445445345',
    },
    {
      date: this.date.getDate(),
      time: this.date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
      }),
      day: this.dayNames[this.date.getDay()],
      month: this.monthNames[this.date.getMonth()],
      year: this.date.getFullYear(),
      from: 'Chennai',
      to: 'Trichy',
      drop: 'Central Bus Stop',
      boarding: 'CMBT',
      rating: 5,
      travels: 'KPN Travels',
      isRated: true,
      ticketId: '7298348942',
    },
    {
      date: this.date.getDate(),
      time: this.date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
      }),
      day: this.dayNames[this.date.getDay()],
      month: this.monthNames[this.date.getMonth()],
      year: this.date.getFullYear(),
      from: 'Chennai',
      to: 'Bangalore',
      boarding: 'Guindy',
      drop: 'Main Bus Stop',
      rating: 4,
      travels: 'Vignesh TAT Travels',
      isRated: true,
      ticketId: '2033940393',
    },
  ];
}
