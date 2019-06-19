/*
 * @Author: Xu Ran 
 * @Date: 2019-06-17 16:21:51 
 * @Last Modified by: Xu Ran
 * @Last Modified time: 2019-06-18 17:19:47
 */


import { Injectable } from '@angular/core';
import { PERSON } from '../mock/people';
import { Observable, of } from 'rxjs';
import { Person } from './people';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private MessageService: MessageService) { }

  personList = PERSON;

  addPerson(person: { name: string, age: number, worktime: number }) {
    this.personList.push(person);
    this.MessageService.show('Successfully added!');
  }

  getPeople(): Observable<Person[]> {
    console.log('====getpeople====')
    this.MessageService.clear();
    this.MessageService.add('Successfully rendered!');
    //of(PERSON) 会返回一个 Observable<Person[]>，它会发出单个值，这个值就是人员数组（person），这个值可以在component中接收到
    return of(this.personList)
    //既然service中发出了请求，component中就要相应地接收和调用，有点类似于vue中的“观察订阅者”模式？
  }

}
