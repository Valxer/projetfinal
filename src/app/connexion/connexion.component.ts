import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  cli= new Client();

  constructor(private router: Router,private srv: ClientService ) { }

  ngOnInit(): void {
  }

  /**
   * Call ClientService.login(Client) to connect a Client(ID,password). It will update the LogginMessage and Store the Client Data in SessionStorage.
   */
  connect(){
    this.srv.connect(this.cli);
  }
  /**
   * Navigate to inscription's page
   */
  inscription(){
    this.router.navigate(['inscription'])
  }

  
}
