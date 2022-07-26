import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert: string[] = [];

  add(alert: string):void {
    this.alert.push(alert)
  }

  clear():void {
    this.alert = []
  }
}
