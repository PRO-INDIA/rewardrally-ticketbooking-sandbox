import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodeChangeService {
  openInspectPopUp$ = new BehaviorSubject<boolean>(false);
  constructor(public modalService: ModalService) {}

  codeChanged(key: string, newCode: string, oldCode: any) {
    let lastIndex = oldCode[key]?.length - 1;
    let current = newCode;
    let previous = oldCode[key][lastIndex];
    if (current === previous) {
      oldCode[key].push(newCode);
      sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));
      return false;
    }
    this.modalService.codeNotifier.next(true);
    oldCode[key].push(newCode);
    sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));

    return true;
  }

  openInspectPopUp() {
    let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');
    let keys = Object.keys(oldCode);

    if (oldCode['userDetails'] && oldCode['userDetails']?.length == 2) {
      this.openInspectPopUp$.next(true);
    }
  }

  trackCode(newCode: string, key: string) {
    let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');

    if (!oldCode[key]?.length) {
      oldCode[key] = [];
      oldCode[key].push(newCode);
      sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));

      return false;
    } else if (oldCode[key]?.length >= 1) {
      return this.codeChanged(key, newCode, oldCode);
    }

    return true;
  }
}
