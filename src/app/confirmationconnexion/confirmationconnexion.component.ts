import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-confirmationconnexion',
  templateUrl: './confirmationconnexion.component.html',
  styleUrls: ['./confirmationconnexion.component.scss']
})
export class ConfirmationconnexionComponent implements OnInit {
  client: Client;
  constructor() { }

  ngOnInit(): void {
    this.client=JSON.parse(sessionStorage.getItem("client"));
  }

}
