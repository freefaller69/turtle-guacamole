import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'stateroom',
  templateUrl: './stateroom.component.html',
  styleUrls: ['./stateroom.component.scss']
})
export class StateroomComponent implements OnInit {
  @Input() stateroom;
  @Input() room: number;
  @Input() active: number;
  @Input() currency: number;
  @Output() idxChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setActive() {
    this.idxChange.emit(this.room);
  }

}
