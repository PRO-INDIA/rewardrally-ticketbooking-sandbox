import { Component, OnInit } from '@angular/core';
import { CodeChangeService } from '../../Services/code-change.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'inspect-popup',
  templateUrl: './inspect-popup.component.html',
  styleUrls: ['./inspect-popup.component.scss'],
})
export class InspectPopupComponent implements OnInit {
  isOpen = false;

  constructor(private codeChange: CodeChangeService) {}
  ngOnInit(): void {
    this.codeChange.openInspectPopUp$.subscribe((isCodeChanged: boolean) => {
      if (isCodeChanged) {
        of(null)
          .pipe(delay(500))
          .subscribe(() => {
            this.isOpen = isCodeChanged;
          });
      }
    });
  }
  closeDialog() {
    this.isOpen = false;
  }
}
