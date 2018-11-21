import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examennaam } from './examennaam.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Vraag } from './vraag/vraag.model';

@Injectable()
export class ExamennaamDataService {
  private readonly _appUrl = 'API';

  constructor(private http: HttpClient) { }

  get examennamen(): Observable<Examennaam[]> {
    return this.http
      .get(`${this._appUrl}/examennamen/`)
      .pipe(map((list: any[]): Examennaam[] => list.map(Examennaam.fromJSON)));
  }

  addNewExamennaam(examennaam: Examennaam): Observable<Examennaam> {
    return this.http
      .post(`${this._appUrl}/examennamen/`, examennaam)
      .pipe(map(Examennaam.fromJSON));
  }

  removeExamennaam(rec: Examennaam): Observable<Examennaam> {
    return this.http
      .delete(`${this._appUrl}/examennaam/${rec.id}`)
      .pipe(map(Examennaam.fromJSON));
  }

  addVraagToExamennaam(vra: Vraag, rec: Examennaam): Observable<Vraag> {
    const theUrl = `${this._appUrl}/examennaam/${rec.id}/vragen`;
    return this.http.post(theUrl, vra).pipe(map(Vraag.fromJSON));
  }

  getExamennaam(id: string): Observable<Examennaam> {
    return this.http
      .get(`${this._appUrl}/examennaam/${id}`)
      .pipe(map(Examennaam.fromJSON));
  }
}
