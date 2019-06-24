/*
 * @Author: Xu Ran 
 * @Date: 2019-06-17 16:24:02 
 * @Last Modified by: Xu Ran
 * @Last Modified time: 2019-06-21 16:30:46
 */

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() addNewInput = new EventEmitter<any>();

  constructor(public MessageService: MessageService, public AccountService: AccountService) { }

  ngOnInit() {
    // console.log(this.person, '=====detail组件接收到的父组件传值')
  }

  addPerson() {
    let addPerson = { id: '14', name: "John", age: 11, worktime: 2 };
    this.AccountService.addPerson(addPerson);
    this.addNewInput.emit(addPerson);
  }
  clearPerson() {
    this.person = null
    this.selectedClear.emit(true);
  }
  showPicture(id: string) {
    window.location.href = "/accountpic/" + id;
  }
}
