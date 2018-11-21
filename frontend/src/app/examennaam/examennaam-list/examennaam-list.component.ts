import { Component, OnInit } from '@angular/core';
import { ExamennaamDataService } from '../examennaam-data.service';
import { Examennaam } from '../examennaam.model';
import { Subject } from 'rxjs/Subject';
import { HttpErrorResponse } from '@angular/common/http';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-examennaam-list',
  templateUrl: './examennaam-list.component.html',
  styleUrls: ['./examennaam-list.component.css']
})
export class ExamennaamListComponent implements OnInit {
  public filterExamennaamName: string;
  public filterExamennaam$ = new Subject<string>();

  public errorMsg: string;

  private _examennamen: Examennaam[];

  constructor(private _examennaamDataService: ExamennaamDataService) {
    this.filterExamennaam$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterExamennaamName = val));
  }

  ngOnInit(): void {
    this._examennaamDataService.examennamen.subscribe(
      examennamen => (this._examennamen = examennamen),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve examennamen: ${error.error}`;
      }
    );
  }

  get examennamen() {
    return this._examennamen;
  }

  removeExamennaam(examennaam: Examennaam) {
    this._examennaamDataService.removeExamennaam(examennaam).subscribe(
      item => (this._examennamen = this._examennamen.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while removing examennamen for ${
          examennaam.name
          }: ${error.error}`;
      }
    );
  }
}
