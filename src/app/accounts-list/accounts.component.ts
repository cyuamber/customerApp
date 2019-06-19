/*
* @Author: Xu Ran 
* @Date: 2019-06-17 16:23:51 
 * @Last Modified by: Xu Ran
 * @Last Modified time: 2019-06-18 18:05:54
 */

import { Component, OnInit } from '@angular/core';
import { Person } from '../people';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.less']
})
export class AccountListComponent implements OnInit {
  constructor(private AccountService: AccountService) { }
  listPeople: Person[];
  initName: string = "";

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    //在 Component 中也向本服务中的Observable<Hero[]>形式看齐,需要通过subscribe来订阅这个服务
    //关键的点在于：Observable.subscribe()，这个值是由service中的Observable对象返回的
    this.AccountService.getPeople().subscribe(person => this.listPeople = person)
    this.selectItem = JSON.parse(window.sessionStorage.getItem("currentSelectName"));
  }

  selectItem: Person;

  onSelectName(item: Person): void {
    window.sessionStorage.setItem('currentSelectName', JSON.stringify(item));
    console.log(window.sessionStorage.getItem("currentSelectName"))
    this.selectItem = item;
    this.ifSelectedClear(false);
  }

  ifSelectedClear(select: boolean) {
    this.selectItem = select ? null : this.selectItem;
  }
}
