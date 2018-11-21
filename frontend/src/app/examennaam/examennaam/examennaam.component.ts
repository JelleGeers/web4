import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Examennaam } from '../examennaam.model';

@Component({
  selector: 'app-examennaam',
  templateUrl: './examennaam.component.html',
  styleUrls: ['./examennaam.component.css']
})
export class ExamennaamComponent implements OnInit {
  @Input() public examennaam: Examennaam;
  @Output() public deleteExamennaam = new EventEmitter<Examennaam>();

  constructor() { }

  ngOnInit() { }

  removeExamennaam() {
    this.deleteExamennaam.emit(this.examennaam);
  }
}
