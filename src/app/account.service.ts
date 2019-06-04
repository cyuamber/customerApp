import { Injectable } from '@angular/core';
import { PERSON } from '../mock/people';
import { Person } from './people';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getPeople(): Person[] {
    return PERSON
  }
}
