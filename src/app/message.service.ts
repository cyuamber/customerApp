import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(messages: string) {
    this.messages.push(messages);
  }
  show(messages: string) {
    this.messages = [messages];
  }

  clear() {
    console.log('====clear')
    this.messages = [];
  }
}
