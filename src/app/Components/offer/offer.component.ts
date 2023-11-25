import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  @Input() offer: any;
  sasToken: string =
    '?sv=2020-10-02&si=sandbox-assets-188BDA9327F&sr=c&sig=kHlt0prnMYgLIWMPASPmU2VN%2BlxXICXJMkEkV863RoE%3D';
  constructor() {}

  ngOnInit(): void {}
}
