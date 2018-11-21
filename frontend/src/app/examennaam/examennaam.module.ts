import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ExamennaamDataService } from './examennaam-data.service';
import { ExamennaamComponent } from './examennaam/examennaam.component';
import { VraagComponent } from './vraag/vraag.component';
import { AddExamennaamComponent } from './add-examennaam/add-examennaam.component';
import { ExamennaamListComponent } from './examennaam-list/examennaam-list.component';
import { ExamennaamFilterPipe } from './examennaam-filter.pipe';
import { ExamennaamDetailComponent } from './examennaam-detail/examennaam-detail.component';
import { ExamennaamResolver } from './examennaam-resolver';
import { httpInterceptorProviders, basehttpInterceptorProviders } from '../http-interceptors/index';

const routes = [
  { path: 'list', component: ExamennaamListComponent },
  { path: 'add', component: AddExamennaamComponent },
  {
    path: ':id',
    component: ExamennaamDetailComponent,
    resolve: { examennaam: ExamennaamResolver }
  }
];

@NgModule({
  declarations: [
    ExamennaamComponent,
    VraagComponent,
    AddExamennaamComponent,
    ExamennaamListComponent,
    ExamennaamFilterPipe,
    ExamennaamDetailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ basehttpInterceptorProviders, httpInterceptorProviders, ExamennaamDataService, ExamennaamResolver]
})
export class ExamennaamModule { }
