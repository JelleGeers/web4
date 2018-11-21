import { Component, OnInit, Input } from '@angular/core';
import { Vraag } from './vraag.model';

@Component({
  selector: 'app-vraag',
  templateUrl: './vraag.component.html',
  styleUrls: ['./vraag.component.css']
})
export class VraagComponent implements OnInit {
  @Input() public vraag: Vraag;

  constructor() { }

  ngOnInit() { }
}
