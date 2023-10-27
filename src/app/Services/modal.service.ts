import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalState = new BehaviorSubject<boolean>(false);
  modalStateData = new BehaviorSubject({
    headerText: '',
    pointsText: '',
    points: '',
  });

  codeNotifier = new BehaviorSubject<boolean>(false);

  openModal() {
    this.modalState.next(true);
  }
  closeModal() {
    this.modalState.next(false);
  }
  changeModalStateValue(value: any) {
    this.modalStateData.next(value);
  }
}
