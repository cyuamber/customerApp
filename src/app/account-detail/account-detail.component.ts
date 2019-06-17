/*
 * @Author: Xu Ran 
 * @Date: 2019-06-17 16:24:02 
 * @Last Modified by: Xu Ran
 * @Last Modified time: 2019-06-17 18:57:35
 */

import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { AccountService } from '../account.service';

import { Person } from '../people';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.less']
})
export class AccountDetailComponent implements OnInit {

  @Input() person: Person;

  constructor(public MessageService: MessageService, public AccountService: AccountService) { }

  ngOnInit() {
  }
  addPerson() {
    let addPerson = { name: "John", age: 11, worktime: 2 };
    this.AccountService.addPerson(addPerson);
  }
}
