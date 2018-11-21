import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamennaamDataService } from '../examennaam-data.service';
import { Examennaam } from '../examennaam.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-examennaam-detail',
  templateUrl: './examennaam-detail.component.html',
  styleUrls: ['./examennaam-detail.component.css']
})
export class ExamennaamDetailComponent implements OnInit {
  private _examennaam: Examennaam;
  public errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private examennaamDataService: ExamennaamDataService
  ) { }

  get examennaam(): Examennaam {
    return this._examennaam;
  }
  ngOnInit() {
    this.route.data.subscribe(
      item => (this._examennaam = item['examennaam']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve examennaam: ${error.error}`;
      }
    );
  }
}
