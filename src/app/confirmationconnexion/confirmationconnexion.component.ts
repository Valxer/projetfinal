import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-confirmationconnexion',
  templateUrl: './confirmationconnexion.component.html',
  styleUrls: ['./confirmationconnexion.component.scss']
})
export class ConfirmationconnexionComponent implements OnInit {
  client: Client;
  constructor(private srv: ClientService) { }

  ngOnInit(): void {
    this.client=JSON.parse(sessionStorage.getItem("client"));
    this.srv.Islogged();
  }

}
