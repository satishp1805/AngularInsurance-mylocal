import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {

  message: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  changeMessage(latestMessage:string){
    this.message.next(latestMessage);
  }
}
