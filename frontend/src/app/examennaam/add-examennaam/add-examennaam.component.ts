import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Examennaam } from '../examennaam.model';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { Vraag, DifficultyType } from '../vraag/vraag.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ExamennaamDataService } from '../examennaam-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-examennaam',
  templateUrl: './add-examennaam.component.html',
  styleUrls: ['./add-examennaam.component.css']
})
export class AddExamennaamComponent implements OnInit {
  public readonly difficultyTypes = ['', 'makkelijk', 'gemiddeld', 'moeilijk'];
  public examennaam: FormGroup;
  public errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private _examennaamDataService: ExamennaamDataService
  ) { }

  get vragen(): FormArray {
    return <FormArray>this.examennaam.get('vragen');
  }

  ngOnInit() {
    this.examennaam = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      vragen: this.fb.array([this.createVragen()])
    });

    this.vragen.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(vraList => {
        const lastElement = vraList[vraList.length - 1];
        if (
          lastElement.vraagname &&
          lastElement.vraagname.length > 2
        ) {
          this.vragen.push(this.createVragen());
        } else if (vraList.length >= 2) {
          const secondToLast = vraList[vraList.length - 2];
          if (
            !lastElement.vraagname &&
            !lastElement.amount &&
            !lastElement.difficultyType &&
            (!secondToLast.vraagname ||
              secondToLast.vraagname.length < 2)
          ) {
            this.vragen.removeAt(this.vragen.length - 1);
          }
        }
      });
  }

  createVragen(): FormGroup {
    return this.fb.group({
      amount: [''],
      difficulty: [''],
      vraagname: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    const examennaam = new Examennaam(this.examennaam.value.name);
    for (const vra of this.examennaam.value.vragen) {
      if (vra.vraagname.length > 2) {
        const vraag = new Vraag(
          vra.vraagname,
          vra.amount,
          vra.difficulty
        );
        examennaam.addVraag(vraag);
      }
    }
    this._examennaamDataService.addNewExamennaam(examennaam).subscribe(
      () => { },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding examennaam for ${
          examennaam.name
          }: ${error.error}`;
      }
    );
  }
}
