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
  newclient= new Client();

  constructor(private http: HttpClient,private router: Router,private srv: ClientService ) { }

  ngOnInit(): void {
    this.newclient.id=null;
  }

  connect(){
    this.srv.connect(this.cli);
  }

  create(){
    this.srv.create(this.newclient);
  }
}
