import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../people';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.less']
})
export class AccountDetailComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
