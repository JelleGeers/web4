import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Examennaam } from './examennaam.model';
import { Observable } from 'rxjs/Observable';
import { ExamennaamDataService } from './examennaam-data.service';

@Injectable()
export class ExamennaamResolver implements Resolve<Examennaam> {
    constructor(private examennaamService: ExamennaamDataService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Examennaam> {
        return this.examennaamService.getExamennaam(route.params['id']);
    }
}
