import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = ["There's no people here!"];

  add(messages: string) {
    this.messages.push(messages);
  }
  show(messages: string) {
    this.messages = [messages];
  }

  clear() {
    this.messages = [];
  }
}
