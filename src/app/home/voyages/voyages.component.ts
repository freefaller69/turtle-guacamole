import { Component, OnInit, Input } from '@angular/core';
import { Voyage } from './voyage.model';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit {
  @Input() voyage: Voyage;
  activeStateroom = 0;

  constructor(
  ) { }

  ngOnInit() {
  }

  currentIdx(e) {
    this.activeStateroom = e;
  }
}
