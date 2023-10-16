import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../../Services/modal.service';
import { CodeChangeService } from '../../Services/code-change.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
})
export class NotifierComponent implements OnInit {
  isOpen = false;
  @Output() remove = new EventEmitter<boolean>();

  constructor(
    private modalService: ModalService,
    private codeChange: CodeChangeService
  ) {}
  ngOnInit(): void {
    this.modalService.codeNotifier.subscribe((isCodeChanged: boolean) => {
      if (isCodeChanged) {
        this.isOpen = isCodeChanged;
      }
    });
  }

  closeDialog() {
    this.isOpen = false;
    this.codeChange.openInspectPopUp();
  }
}
