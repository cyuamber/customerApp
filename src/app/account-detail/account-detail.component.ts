/*
 * @Author: Xu Ran 
 * @Date: 2019-06-17 16:24:02 
 * @Last Modified by: Xu Ran
 * @Last Modified time: 2019-06-19 19:04:07
 */

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MessageService } from '../message.service';
import { AccountService } from '../account.service';

import { Person } from '../people';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.less']
})
export class AccountDetailComponent implements OnInit {

  // 用input装饰符来接收父组件的传旨，用output装饰符来向父组件传旨
  @Input() person: Person;
  @Output() selectedClear = new EventEmitter<boolean>();

  constructor(public MessageService: MessageService, public AccountService: AccountService) { }

  ngOnInit() {
    console.log(this.person, '=====detail组件接收到的父组件传值')
  }

  addPerson() {
    let addPerson = { name: "John", age: 11, worktime: 2 };
    this.AccountService.addPerson(addPerson);
  }
  clearPerson() {
    this.person = null
    this.selectedClear.emit(true);
  }
  showPicture(name: string) {
    console.log(name);
    window.location.href = "/accountpic";

  }
}
