import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  dateOne = new Date();

  isToday(date: Date): boolean {
    return date.getMonth === Date.now;
  }
}
