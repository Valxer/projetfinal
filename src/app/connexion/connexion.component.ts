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

  connect(){
    this.srv.login(this.cli);
  }
  inscription(){
    this.router.navigate(['inscription'])
  }
}
