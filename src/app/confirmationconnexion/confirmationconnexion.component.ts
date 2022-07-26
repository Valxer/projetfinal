import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-confirmationconnexion',
  templateUrl: './confirmationconnexion.component.html',
  styleUrls: ['./confirmationconnexion.component.scss']
})
export class ConfirmationconnexionComponent implements OnInit {
  client: Client;

  constructor(private srv: ClientService,private adminsrv: AdminService) { }

  ngOnInit(): void {
    this.client=JSON.parse(sessionStorage.getItem("client"));
    if (JSON.parse(sessionStorage.getItem("admin")) != null) {
      this.client = new Client();
      this.client.prenom= 'admin'
    }
    this.srv.Islogged();
    this.adminsrv.Islogged();
  }

}
