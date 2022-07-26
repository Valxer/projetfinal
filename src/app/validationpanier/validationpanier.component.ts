import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-validationpanier',
  templateUrl: './validationpanier.component.html',
  styleUrls: ['./validationpanier.component.scss']
})
export class ValidationpanierComponent implements OnInit {

  totalfinal:number;
  numCom : number;
  client : Client;

  constructor() { }

  ngOnInit(): void {
    this.numCom = JSON.parse(sessionStorage.getItem("numCom"));
    this.client =JSON.parse(sessionStorage.getItem("client"));
  }

}
