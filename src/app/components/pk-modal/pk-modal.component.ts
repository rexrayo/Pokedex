import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pk-modal',
  templateUrl: './pk-modal.component.html',
  styleUrls: ['./pk-modal.component.scss']
})
export class PkModalComponent implements OnInit {

  @Input() visible: boolean;
  @Input() info: any;
  @Input() evol_lines: any;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.close.emit(false);
  }

}
