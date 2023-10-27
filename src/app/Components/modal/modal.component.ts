import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from '../../Services/modal.service';
import party from 'party-js';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.modalStateData.subscribe((data: any) => {
      this.modelData = { ...data };
      this.createPopup();
    });
  }
  modelData = {
    headerText: '',
    pointsText: '',
    points: '',
  };
  closeModal() {
    this.modalService.closeModal();
  }
  createPopup() {
    const confirmButton = document.getElementById('popUp');
    if (confirmButton) {
      party.confetti(confirmButton, {
        count: party.variation.range(40, 60),
        size: party.variation.range(0.8, 1.2),
      });
    }
  }
}
