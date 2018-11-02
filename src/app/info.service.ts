import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  constructor() { }

  getInfo(): string {
    return 'I am from Service';
  }
}
