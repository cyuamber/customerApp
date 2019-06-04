import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Person } from '../people';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less']
})
export class AccountListComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService, private AccountService: AccountService) { }

  listPeople: Person[];
  initName: string = ""

  ngOnInit() {
    this.getPeople();
    this.spinner.show();
  }

  getPeople(): void {
    this.listPeople = this.AccountService.getPeople()
  }

  selectItem: Person;

  onSelectName(item: Person): void {
    this.selectItem = item;
  }
}
