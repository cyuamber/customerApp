/*
* @Author: Xu Ran 
* @Date: 2019-06-17 16:23:51 
 * @Last Modified by: Xu Ran
 * @Last Modified time: 2019-06-17 18:59:46
 */

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
  initName: string = "";

  ngOnInit() {
    this.getPeople();
    this.spinner.show();
  }

  getPeople(): void {
    //在 Component 中也向本服务中的Observable<Hero[]>形式看齐,需要通过subscribe来订阅这个服务
    //关键的点在于：Observable.subscribe()，这个值是由service中的Observable对象返回的
    this.AccountService.getPeople().subscribe(person => this.listPeople = person)
  }

  selectItem: Person;

  onSelectName(item: Person): void {
    this.selectItem = item;
  }
}
